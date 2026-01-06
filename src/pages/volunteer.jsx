import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, HeartPulse, Camera, Laptop, Send, CheckCircle } from 'lucide-react';

const Volunteer = () => {
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    {
      icon: <BookOpen className="text-blue-600" />,
      title: "Teaching & Mentoring",
      desc: "Help children with subjects like Math, English, or Science at our learning centers."
    },
    {
      icon: <HeartPulse className="text-red-600" />,
      title: "Health Camp Support",
      desc: "Assist doctors and manage crowds during our monthly rural medical checkups."
    },
    {
      icon: <Laptop className="text-purple-600" />,
      title: "Digital Seva",
      desc: "Use your skills in coding, design, or social media to help us spread the word."
    },
    {
      icon: <Camera className="text-orange-600" />,
      title: "Documentation",
      desc: "Capture the impact through photography or videography for our reports."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- Hero Section --- */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Hands that Serve are <span className="text-green-600">Holier</span> than Lips that Pray.
            </h1>
            <p className="text-gray-500 text-xl">
              Join our community of 500+ volunteers across India. Whether you have 
              an hour a week or a day a month, your time can change a life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Roles Section --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">How You Can Help</h2>
          <p className="text-gray-500 mt-2">Choose a role that fits your passion and skills.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                {role.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{role.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Form Section --- */}
      <section className="py-20 bg-green-600 rounded-[4rem] mx-4 mb-10 overflow-hidden relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white z-10">
            <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-green-100 text-lg mb-8">
              Fill out this simple form, and our volunteer coordinator will reach 
              out to you within 48 hours for an orientation call.
            </p>
            <ul className="space-y-4">
              {['Certificate of Appreciation', 'Ground-level Experience', 'Community Networking'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <CheckCircle className="text-green-300" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl z-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="text" placeholder="Last Name" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
                <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500" required />
                <input type="tel" placeholder="Phone Number (WhatsApp)" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500" required />
                <select className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500 text-gray-500">
                  <option>Select Preferred Role</option>
                  <option>Teaching</option>
                  <option>Health Support</option>
                  <option>Digital/Design</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Tell us why you want to join..." rows="3" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500"></textarea>
                <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                  Send Application <Send size={20} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                <p className="text-gray-500">Thank you for your willingness to serve. We will contact you shortly.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* --- Community Quote --- */}
      <section className="py-20 text-center">
        <div className="flex justify-center mb-6">
          <Users size={48} className="text-gray-200" />
        </div>
        <p className="text-2xl italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
          "The best way to find yourself is to lose yourself in the service of others."
        </p>
      </section>
    </div>
  );
};

export default Volunteer;