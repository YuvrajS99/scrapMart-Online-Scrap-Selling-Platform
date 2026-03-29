/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Recycle, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-green-100 p-2.5 rounded-full group-hover:bg-green-200 transition-colors shadow-sm">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-green-700 transition-colors">
                ScrapMart
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8 border-l-2 pl-8 border-gray-100">
              <Link to="/about" className="text-gray-600 hover:text-green-600 font-bold transition-colors">About</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-green-600 font-bold transition-colors">How It Works</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-green-600 font-bold transition-colors">Pricing</Link>
              <Link to="/support" className="text-gray-600 hover:text-green-600 font-bold transition-colors">Support</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                <Link
                  to={`/dashboard/${user.role}`}
                  className="text-gray-600 hover:text-green-600 font-bold transition-colors flex items-center gap-2"
                >
                  <UserIcon size={18} />
                  Dashboard ({user.role})
                </Link>
                <div className="flex items-center gap-5 border-l-2 pl-5 border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    Hello, {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg font-bold transition-colors shadow-sm"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-green-600 font-bold transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-green-400/20"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-4 pb-4 space-y-1 sm:px-3">
              <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-gray-100">
                <Link to="/about" className="block px-3 py-2 rounded-lg text-base font-bold text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/how-it-works" className="block px-3 py-2 rounded-lg text-base font-bold text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" onClick={() => setIsOpen(false)}>How It Works</Link>
                <Link to="/pricing" className="block px-3 py-2 rounded-lg text-base font-bold text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link to="/support" className="block px-3 py-2 rounded-lg text-base font-bold text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" onClick={() => setIsOpen(false)}>Support</Link>
              </div>
              {user ? (
                <div className="flex flex-col gap-2">
                  <div className="px-3 py-2 border-b border-gray-100 mb-2">
                    <span className="text-sm text-gray-500 font-medium">
                      Hello, {user.name}
                    </span>
                  </div>
                  <Link
                    to={`/dashboard/${user.role}`}
                    className="block px-3 py-3 rounded-lg text-base font-bold text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard ({user.role})
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-3 py-3 rounded-lg text-base font-bold text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 pt-2">
                  <Link
                    to="/login"
                    className="block px-4 py-3 rounded-lg text-base font-bold text-gray-700 hover:text-green-600 hover:bg-green-50 text-center transition-colors border border-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-3 rounded-xl text-base font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500 text-center transition-all shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
