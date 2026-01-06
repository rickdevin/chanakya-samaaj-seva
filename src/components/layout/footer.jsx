import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-2xl font-black flex items-center gap-2">
            <Heart size={24} className="text-green-500 fill-current" />
            <span>SamaajSeva</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Registered Section 8 NGO dedicated to rural upliftment and education across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-white">Organization</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/about" className="hover:text-green-500">About Us</Link>
            <Link to="/transparency" className="hover:text-green-500">Financial Reports</Link>
            <Link to="/contact" className="hover:text-green-500">Contact Support</Link>
          </div>
        </div>

        {/* Contact Details */}
        <div className="text-sm text-gray-400 space-y-3">
          <h4 className="font-bold mb-4 text-white">Office</h4>
          <p className="flex items-center gap-2"><MapPin size={16} /> New Delhi, India</p>
          <p className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</p>
          <p className="flex items-center gap-2"><Mail size={16} /> help@samaajseva.org</p>
        </div>
      </div>
      
      <p className="text-center text-gray-500 text-xs mt-8 font-medium">
        © 2026 Samaaj Seva Foundation • 80G Tax Exempted
      </p>
    </footer>
  );
};

export default Footer;