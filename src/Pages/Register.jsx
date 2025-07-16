import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router"; 
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import Lottie from "lottie-react";
import registerLottie from '../assets/Lotties/lottie.json';
import { auth } from "../firebase/firebase.init";

const Provider = new GoogleAuthProvider();

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    return hasUpper && hasLower && password.length >= 6;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setNameError("");

    if (typeof email !== "string" || email.trim() === "") {
      setError("Please provide a valid email address.");
      toast.error("Please provide a valid email address.");
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Invalid email format.");
      toast.error("Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must include uppercase, lowercase, and be at least 6 characters.");
      toast.error("Password must include uppercase, lowercase, and be at least 6 characters.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((updateError) => {
            setError("Profile update failed: " + updateError.message);
            toast.error("Profile update failed: " + updateError.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleRegister = () => {
    signInWithPopup(auth, Provider)
      .then((result) => {
        setUser(result.user);
        toast.success("Registration with Google successful!");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Registration with Google failed: " + error.message);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-10 px-4 max-w-screen-lg mx-auto gap-10">
      
      <div className="w-full lg:w-1/2">
        <div className="card bg-base-100 w-full shadow-2xl p-6">
          <h2 className="font-semibold text-2xl text-center">Register your account</h2>
          <form onSubmit={handleRegister} className="card-body p-0 mt-4">
            
            <label className="label">Name</label>
            <input name="name" type="text" className="input input-bordered w-full" required />
            {nameError && <p className="text-error text-sm">{nameError}</p>}

            <label className="label">Photo URL</label>
            <input name="photo" type="text" className="input input-bordered w-full" required />

            <label className="label">Email</label>
            <input name="email" type="email" className="input input-bordered w-full" required />

            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-600"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-error text-sm mt-1">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4 hover:bg-blue-700 transition-colors">
              Register
            </button>
            <button type="button" className="btn btn-outline mt-2" onClick={handleGoogleRegister}>
              Register with Google
            </button>

            <p className="text-center mt-5">
              Already have an account? <Link className="text-blue-600" to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
        <Lottie style={{ width: '300px' }} animationData={registerLottie} loop={true}></Lottie>
      </div>
      
    </div>
  );
};

export default Register;
