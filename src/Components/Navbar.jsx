import React, { useContext } from "react";
import { NavLink } from "react-router"; // 🔁 fix: use react-router-dom
import { IoFastFood } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../assets/icon.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div
      className="navbar fixed top-0 left-0 right-0 z-50
                 bg-black/10 backdrop-blur-md text-white shadow-sm px-6"
      style={{ height: "64px" }}
    >
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl text-white">
            <IoFastFood />
          </h1>
          <NavLink
            to="/"
            className="text-2xl md:text-3xl font-bold text-white transition"
          >
            TheFoodCycle
          </NavLink>
        </div>
      </div>

      {/* Center: Menu for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white text-white font-semibold px-3 pb-1"
                  : "text-white hover:border-b-2 hover:border-white px-3 pb-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/available-foods"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white text-white font-semibold px-3 pb-1"
                  : "text-white hover:border-b-2 hover:border-white px-3 pb-1"
              }
            >
              Available Foods
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add-food"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-white text-white font-semibold px-3 pb-1"
                      : "text-white hover:border-b-2 hover:border-white px-3 pb-1"
                  }
                >
                  Add Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-foods"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-white text-white font-semibold px-3 pb-1"
                      : "text-white hover:border-b-2 hover:border-white px-3 pb-1"
                  }
                >
                  Manage My Foods
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/food-request"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-white text-white font-semibold px-3 pb-1"
                      : "text-white hover:border-b-2 hover:border-white px-3 pb-1"
                  }
                >
                  My Food Request
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Right: Avatar/Logout or Login/Register */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4 hidden lg:flex">
            <div className="tooltip tooltip-left" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || userIcon}
                alt="User"
                className="w-10 h-10 rounded-full border border-white"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-black text-white hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn bg-black text-white hover:bg-gray-700 hidden lg:flex"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-black text-white hover:bg-gray-700 hidden lg:flex"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
