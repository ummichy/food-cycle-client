import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [error, setError] = useState('');
  const { signInWithGoogle, signIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to request JWT token and set cookie on client
  const setJwtToken = async (email) => {
    try {
      await axios.post(
        'http://localhost:3000/jwt',
        { email },
        { withCredentials: true }
      );
      console.log('JWT cookie set');
    } catch (err) {
      console.error('Failed to set JWT cookie:', err.message);
    }
  };

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(async (result) => {
        setUser(result.user);
        setError('');
        toast.success('Logged in successfully!', {
          position: "top-right",
          autoClose: 3000,
        });

        await setJwtToken(result.user.email); 

        navigate(location.state?.from || '/');
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Login failed: ' + err.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (result) => {
        setUser(result.user);
        toast.success('Logged in with Google successfully!', {
          position: "top-right",
          autoClose: 3000,
        });

        await setJwtToken(result.user.email);  

        navigate(location.state?.from || '/');
      })
      .catch((error) => {
        setError(error.message);
        toast.error('Google Login failed: ' + error.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className=" bg-[#edeceb] flex justify-center pt-32 pb-20 items-center px-2">
      <div className="card bg-base-100 w-full max-w-sm drop-shadow-lg py-5 px-4">
        <h2 className="font-semibold text-2xl text-center mb-4">Login your account</h2>
        <form onSubmit={handleEmailPasswordLogin} className="card-body space-y-2">
          <label>Email</label>
          <input name="email" type="email" className="input input-bordered" placeholder="Email" required />
          <label>Password</label>
          <input name="password" type="password" className="input input-bordered" placeholder="Password" required />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button type="submit" className="btn btn-neutral hover:bg-blue-700 transition-colors ">Login</button>
        </form>
        <button type="button" onClick={handleGoogleLogin} className="btn btn-outline hover:bg-gray-200 transition-colors ">
          Login with Google
        </button>
        <p className="text-center pt-4">
          Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
