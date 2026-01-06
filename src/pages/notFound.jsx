import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <motion.h1 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-9xl font-black text-gray-100"
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-bold text-gray-900 -mt-10 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;