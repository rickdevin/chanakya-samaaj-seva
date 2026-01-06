import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA */}
        <Link to="/" className="text-2xl font-black text-gray-900 flex items-center gap-2">
          <div className="bg-green-600 p-1.5 rounded-lg text-white">
            <Heart size={20} fill="currentColor" />
          </div>
          <span>Samaaj<span className="text-green-600">Seva</span></span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-sm text-gray-600">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/causes" className="hover:text-green-600">Causes</Link>
          <Link to="/impact" className="hover:text-green-600">Impact</Link>
          <Link to="/volunteer" className="hover:text-green-600">Volunteer</Link>
          <Link to="/donate" className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-all">
            Donate Now
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white p-6 space-y-4 shadow-xl border-t border-gray-100 flex flex-col font-bold text-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/donate" onClick={() => setIsOpen(false)} className="text-green-600">Donate Now</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;