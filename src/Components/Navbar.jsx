import { NavLink } from 'react-router';
import { GrServices } from "react-icons/gr";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from "../assets/icon.png";
import { toast } from 'react-toastify';

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
    <div className="navbar bg-base-100 shadow-sm px-8">
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className='flex items-center gap-2'>
          <h1 className='text-3xl'><GrServices /></h1>
          <NavLink to="/" className="btn btn-ghost text-xl">ServiceTrack</NavLink>
        </div>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-gray-600 text-sm border-b-2 border-gray-600" : "text-sm"
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) =>
              isActive ? "text-gray-600 text-sm border-b-2 border-gray-600" : "text-sm"
            }>
              Services
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/add-service" className={({ isActive }) =>
                  isActive ? "text-gray-600 text-sm border-b-2 border-gray-600" : "text-sm"
                }>
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-services" className={({ isActive }) =>
                  isActive ? "text-gray-600 text-sm border-b-2 border-gray-600" : "text-sm"
                }>
                  My Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-reviews" className={({ isActive }) =>
                  isActive ? "text-gray-600 text-sm border-b-2 border-gray-600" : "text-sm"
                }>
                  My Reviews
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
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[999] w-56 p-4 bg-white rounded-xl shadow-xl border border-gray-200 space-y-1 transition-all duration-300 ease-in-out"
          >
            <li>
              <NavLink to="/" className="text-sm hover:bg-gray-100 rounded px-2 py-1">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services" className="text-sm hover:bg-gray-100 rounded px-2 py-1">Services</NavLink>
            </li>

            {user ? (
              <>
                <li><NavLink to="/add-service" className="text-sm hover:bg-gray-100 rounded px-2 py-1">Add Service</NavLink></li>
                <li><NavLink to="/my-services" className="text-sm hover:bg-gray-100 rounded px-2 py-1">My Services</NavLink></li>
                <li><NavLink to="/my-reviews" className="text-sm hover:bg-gray-100 rounded px-2 py-1">My Reviews</NavLink></li>
                <div className="divider my-1"></div>
                <li><button onClick={handleLogout} className="text-sm text-red-500 hover:bg-red-100 rounded px-2 py-1">Logout</button></li>
              </>
            ) : (
              <>
                <div className="divider my-1"></div>
                <li><NavLink to="/login" className="text-sm hover:bg-gray-100 rounded px-2 py-1">Login</NavLink></li>
                <li><NavLink to="/register" className="text-sm hover:bg-gray-100 rounded px-2 py-1">Register</NavLink></li>
              </>
            )}
          </ul>
        </div>

        {/* Desktop Avatar/Logout or Login/Register */}
        {user ? (
          <div className="flex items-center gap-4 hidden lg:flex">
            <div className="tooltip tooltip-left" data-tip={user.displayName || "User"}>
              <img src={user.photoURL || userIcon} alt="User" className="w-10 h-10 rounded-full border" />
            </div>
            <button onClick={handleLogout} className="btn btn-sm">Logout</button>
          </div>
        ) : (
          <>
            <NavLink to="/login" className="btn hidden lg:flex ml-2">Login</NavLink>
            <NavLink to="/register" className="btn hidden lg:flex ml-2">Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
