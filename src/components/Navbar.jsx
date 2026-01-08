import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, userData, logout } = useContext(AuthContext);
  const { clinicData } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    logout();
    alert('You have been logged out successfully.');
    navigate('/');
    scrollToTop();
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between text-sm py-3 sm:py-4 px-3 sm:px-4 md:px-10 lg:px-16" style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      {/* Logo */}
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-black cursor-pointer truncate max-w-[60%] sm:max-w-none" onClick={() => { navigate('/'); scrollToTop(); }}>
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
      <div className="flex items-center gap-2 sm:gap-4 animate-slideInFromRight" style={{ animationDelay: '0.7s' }}>
        {isAuthenticated ? (
          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer group relative">
            <img
              className="w-6 sm:w-7 md:w-8 rounded-full"
              src={userData.image || assets.profile_pic}
              alt="Profile"
            />
            <img className="w-2 sm:w-2.5 hidden sm:block" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-12 sm:pt-14 text-sm sm:text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-40 sm:min-w-48 bg-white rounded-lg flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 shadow-xl border border-gray-100">
                {userData && (
                  <div className="pb-2 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">{userData.name}</p>
                    <p className="text-xs text-gray-500">{userData.email}</p>
                  </div>
                )}
                <p
                  onClick={() => { navigate("profile"); scrollToTop(); }}
                  className="hover:text-primary cursor-pointer text-sm sm:text-base transition-colors"
                >
                  My Profile
                </p>
                <p
                  onClick={() => { navigate("my-appointment"); scrollToTop(); }}
                  className="hover:text-primary cursor-pointer text-sm sm:text-base transition-colors"
                >
                  My Appointments
                </p>
                <p
                  onClick={handleLogout}
                  className="hover:text-red-600 cursor-pointer text-sm sm:text-base transition-colors text-red-500 font-medium"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => { navigate("/login"); scrollToTop(); }}
            className="bg-primary text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-light text-xs sm:text-sm hidden md:block transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-90"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-5 sm:w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-80 h-screen z-50 transform ${showMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden overflow-y-auto`}
        style={{ background: 'linear-gradient(135deg, #e8f0f8 0%, #e0e7f5 50%, #d8e0f2 100%)', backdropFilter: 'blur(10px)' }}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300 sticky top-0 bg-inherit">
          <div className="text-lg sm:text-xl font-bold text-gray-800 truncate" onClick={() => { navigate('/'); scrollToTop(); setShowMenu(false); }}>
            {clinicData.clinic.name}
          </div>
          <img
            onClick={() => setShowMenu(false)}
            className="w-5 sm:w-6 cursor-pointer flex-shrink-0"
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <ul className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 font-medium">
          <NavLink to="/" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-2 sm:py-3 text-center text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:text-primary cursor-pointer active:bg-primary/10 rounded-lg">Home</li>
          </NavLink>
          <NavLink to="/services" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-2 sm:py-3 text-center text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:text-primary cursor-pointer active:bg-primary/10 rounded-lg">Services</li>
          </NavLink>
          <NavLink to="/doctors" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-2 sm:py-3 text-center text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:text-primary cursor-pointer active:bg-primary/10 rounded-lg">Doctors</li>
          </NavLink>
          <NavLink to="/about" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-2 sm:py-3 text-center text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:text-primary cursor-pointer active:bg-primary/10 rounded-lg">About</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => { setShowMenu(false); scrollToTop(); }}>
            <li className="py-2 sm:py-3 text-center text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:text-primary cursor-pointer active:bg-primary/10 rounded-lg">Contact</li>
          </NavLink>
          {isAuthenticated ? (
            <>
              {userData && (
                <div className="py-2 px-4 bg-white/50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">{userData.name || 'User'}</p>
                  <p className="text-xs text-gray-500">{userData.email}</p>
                </div>
              )}
              <NavLink to="/profile" onClick={() => { setShowMenu(false); scrollToTop(); }}>
                <li className="py-2 sm:py-3 text-center text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:text-primary cursor-pointer active:bg-primary/10 rounded-lg">My Profile</li>
              </NavLink>
              <NavLink to="/my-appointment" onClick={() => { setShowMenu(false); scrollToTop(); }}>
                <li className="py-2 sm:py-3 text-center text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:text-primary cursor-pointer active:bg-primary/10 rounded-lg">My Appointments</li>
              </NavLink>
              <button
                onClick={() => { handleLogout(); setShowMenu(false); }}
                className="bg-red-500 text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg mt-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => { navigate("/login"); scrollToTop(); setShowMenu(false); }}
              className="bg-primary text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg mt-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
