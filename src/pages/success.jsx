import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Share2, Home } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} strokeWidth={3} />
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-500 mb-10">
          Your donation has been received. A receipt has been sent to your email, and your contribution is already being put to work.
        </p>

        <div className="space-y-4">
          <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all">
            <Download size={18} /> Download 80G Receipt
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            <Link to="/" className="flex items-center justify-center gap-2 p-4 border border-gray-100 rounded-2xl font-bold text-gray-600 hover:bg-gray-50">
              <Home size={18} /> Home
            </Link>
            <button className="flex items-center justify-center gap-2 p-4 bg-blue-50 text-blue-600 rounded-2xl font-bold hover:bg-blue-100">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;