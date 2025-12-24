import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const { clinicData } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between text-sm py-4 border-b border-gray-300 px-4 sm:px-[10%]" style={{background: 'linear-gradient(135deg, #e8f0f8 0%, #e0e7f5 50%, #d8e0f2 100%)', backdropFilter: 'blur(10px)'}}>
      {/* Logo */}
      <div className="text-3xl font-extrabold text-black cursor-pointer" onClick={() => { navigate('/'); scrollToTop(); }}>
        {clinicData.clinic.name}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" onClick={scrollToTop}>
          <li className="py-1 transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/services" onClick={scrollToTop}>
          <li className="py-1 transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Services</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors" onClick={scrollToTop}>
          <li className="py-1 transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about" onClick={scrollToTop}>
          <li className="py-1 transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact" onClick={scrollToTop}>
          <li className="py-1 transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Contact</li>
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
                  onClick={() => { navigate("profile"); scrollToTop(); }}
                  className="hover:text-black cursor-pointer"
                >
                  My profile
                </p>
                <p
                  onClick={() => { navigate("my-appointment"); scrollToTop(); }}
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
            onClick={() => { navigate("/login"); scrollToTop(); }}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-90"
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
        className={`fixed top-0 right-0 w-full pl-10 h-screen z-50 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
        style={{background: 'linear-gradient(135deg, #e8f0f8 0%, #e0e7f5 50%, #d8e0f2 100%)', backdropFilter: 'blur(10px)'}}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div className="text-2xl font-bold text-gray-800" onClick={() => { navigate('/'); scrollToTop(); }}>
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
          <NavLink to="/" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-1 text-center transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Home</li>
          </NavLink>
          <NavLink to="/services" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-1 text-center transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Services</li>
          </NavLink>
          <NavLink to="/doctors" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-1 text-center transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Doctors</li>
          </NavLink>
          <NavLink to="/about" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-1 text-center transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">About</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-1 text-center transition-all duration-300 hover:scale-110 hover:text-primary cursor-pointer">Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
