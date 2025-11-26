import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            🎓 FBC Enrollment Portal
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-blue-200 ${location.pathname === '/' ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/programs" 
              className={`hover:text-blue-200 ${location.pathname === '/programs' ? 'border-b-2 border-white' : ''}`}
            >
              Programs
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-200 ${location.pathname === '/about' ? 'border-b-2 border-white' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-blue-200 ${location.pathname === '/contact' ? 'border-b-2 border-white' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
            >
              Student Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;