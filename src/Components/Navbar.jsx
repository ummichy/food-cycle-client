import React from "react";
import { NavLink } from "react-router";
import { GrServices } from "react-icons/gr";
import { useContext } from "react";
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
                 bg-black/20 backdrop-blur-md
                 shadow-sm px-8 font-sans"
      style={{ minHeight: "64px" }}
    >
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl text-white">
            <GrServices />
          </h1>
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl text-white normal-case hover:bg-gray-700 hover:text-white transition"
          >
            The FoodCycle
          </NavLink>
        </div>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 border-b-2 border-gray-300 px-3 py-1"
                  : "text-gray-200 px-3 py-1 hover:text-white hover:border-b-2 hover:border-white transition"
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
                  ? "text-gray-300 border-b-2 border-gray-300 px-3 py-1"
                  : "text-gray-200 px-3 py-1 hover:text-white hover:border-b-2 hover:border-white transition"
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
                      ? "text-gray-300 border-b-2 border-gray-300 px-3 py-1"
                      : "text-gray-200 px-3 py-1 hover:text-white hover:border-b-2 hover:border-white transition"
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
                      ? "text-gray-300 border-b-2 border-gray-300 px-3 py-1"
                      : "text-gray-200 px-3 py-1 hover:text-white hover:border-b-2 hover:border-white transition"
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
                      ? "text-gray-300 border-b-2 border-gray-300 px-3 py-1"
                      : "text-gray-200 px-3 py-1 hover:text-white hover:border-b-2 hover:border-white transition"
                  }
                >
                  My Food Request
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Right: Avatar or Login/Register + Dropdown */}
      <div className="navbar-end">
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[999] w-56 p-4
                       bg-black bg-opacity-50 backdrop-blur-md rounded-xl shadow-xl
                       border border-gray-700 space-y-1 transition-all duration-300 ease-in-out"
          >
            <li>
              <NavLink
                to="/"
                className="text-lg text-white hover:bg-gray-700 rounded px-3 py-2 transition"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/available-foods"
                className="text-lg text-white hover:bg-gray-700 rounded px-3 py-2 transition"
              >
                Available Foods
              </NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink
                    to="/add-food"
                    className="text-lg text-white hover:bg-gray-700 rounded px-3 py-2 transition"
                  >
                    Add Food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-foods"
                    className="text-lg text-white hover:bg-gray-700 rounded px-3 py-2 transition"
                  >
                    Manage My Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/food-request"
                    className="text-lg text-white hover:bg-gray-700 rounded px-3 py-2 transition"
                  >
                    My Food Request
                  </NavLink>
                </li>
                <div className="divider my-1 border-gray-700"></div>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn hidden lg:flex ml-3 bg-gray-800 text-white hover:bg-gray-700 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <div className="divider my-1 border-gray-700"></div>
                <li>
                  <NavLink
                    to="/login"
                    className="text-lg text-white hover:bg-gray-700 rounded px-3 py-2 transition"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="text-lg text-white hover:bg-gray-700 rounded px-3 py-2 transition"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Desktop Avatar/Logout or Login/Register */}
        {user ? (
          <div className="flex items-center gap-5 hidden lg:flex">
            <div className="tooltip tooltip-left" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || userIcon}
                alt="User"
                className="w-12 h-12 rounded-full border border-gray-300"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn hidden lg:flex ml-3 bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn hidden lg:flex ml-3 bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn hidden lg:flex ml-3 bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* Main content area with white background and padding-top = navbar height */}
      <div className="bg-black  pt-16">
        {children}
      </div>
    </>
  );
};

export default AppLayout;
