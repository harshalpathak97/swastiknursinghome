import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const { clinicData } = useContext(AppContext);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md flex items-center justify-between text-sm py-4 border-b border-gray-300 px-4 sm:px-[10%]">
      {/* Logo */}
      <div className="text-3xl font-extrabold text-black cursor-pointer" onClick={() => navigate('/')}>
        {clinicData.clinic.name}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/services">
          <li className="py-1">Services</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* User Menu */}
      <div className="flex items-center gap-4 animate-slideInFromRight" style={{ animationDelay: '0.7s' }}>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full pl-10 h-screen bg-white z-50 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div className="text-2xl font-bold text-gray-800" onClick={() => navigate('/')}>
            {clinicData.clinic.name}
          </div>
          <img
            onClick={() => setShowMenu(false)}
            className="w-6 cursor-pointer"
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <ul className="flex flex-col gap-6 p-6 font-medium">
          <NavLink to="/" onClick={() => setShowMenu(false)}>
            <li className="py-1 text-center">Home</li>
          </NavLink>
          <NavLink to="/services" onClick={() => setShowMenu(false)}>
            <li className="py-1 text-center">Services</li>
          </NavLink>
          <NavLink to="/doctors" onClick={() => setShowMenu(false)}>
            <li className="py-1 text-center">Doctors</li>
          </NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>
            <li className="py-1 text-center">About</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)}>
            <li className="py-1 text-center">Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
