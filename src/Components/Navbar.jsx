import React, { useContext } from "react";
import { NavLink } from "react-router";
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
      className="navbar fixed top-0 left-0 right-0 z-50 justify-between items-center
                 bg-black/10 backdrop-blur-md text-white shadow-sm px-6"
      style={{ height: "64px" }}
    >
      {/* Left: Logo + Site Name */}
      <div className="navbar-start flex items-center gap-3">
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

      {/* Center: Desktop Menu */}
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

      {/* Right: Desktop Avatar/Logout or Login/Register */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        {user ? (
          <>
            <div
              className="tooltip tooltip-left"
              data-tip={user.displayName || "User"}
            >
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
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn bg-black text-white hover:bg-gray-700"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-black text-white hover:bg-gray-700"
            >
              Register
            </NavLink>
          </>
        )}
      </div>

      {/* Dropdown Menu Toggle for Small and Medium devices */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost text-white">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/90 backdrop-blur-md rounded-box w-52 text-white"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/available-foods">Available Foods</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/add-food">Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/my-foods">Manage My Foods</NavLink>
              </li>
              <li>
                <NavLink to="/food-request">My Food Request</NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-left text-white w-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
