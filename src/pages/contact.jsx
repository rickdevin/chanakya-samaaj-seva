import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  Globe
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Header Section --- */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Get in <span className="text-green-600">Touch</span>
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Have questions about donations, tax receipts, or volunteering? 
            Our team is here to help you. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- Contact Info Cards --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-500 text-sm">+91 98765 43210</p>
              <p className="text-gray-500 text-sm">+91 11 2345 6789</p>
            </div>

            <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-500 text-sm">support@samaajseva.org</p>
              <p className="text-gray-500 text-sm">info@samaajseva.org</p>
            </div>

            <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-500 text-sm">
                123, Seva Bhawan, Okhla Phase III,<br />
                New Delhi - 110020, India
              </p>
            </div>
          </div>

          {/* --- Contact Form --- */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-100/50">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send a Message</h2>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input type="text" className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input type="email" className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500 transition-all" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <select className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-500">
                  <option>General Inquiry</option>
                  <option>Donation Issues</option>
                  <option>Volunteer Opportunities</option>
                  <option>Media & Press</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea rows="5" className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-green-500 transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="md:col-span-2 bg-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-100">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Map & WhatsApp Section --- */}
      <section className="py-20 bg-gray-900 rounded-[4rem] mx-4 mb-10 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-bold mb-6">
              <Clock size={16} /> Fast Response
            </div>
            <h2 className="text-4xl font-bold mb-6">Instant Support via WhatsApp</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Don't want to wait? Connect with our helpdesk directly on WhatsApp 
              for immediate assistance regarding your contributions.
            </p>
            <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all transform hover:scale-105">
              <MessageCircle size={24} /> Chat with Us
            </button>
          </div>
          
          {/* Decorative Map Placeholder */}
          <div className="h-80 bg-gray-800 rounded-[3rem] border border-gray-700 relative overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Globe size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-bold uppercase tracking-widest text-xs">Map Integration Placeholder</p>
              <p className="text-[10px] px-10">In a real app, embed your Google Maps iFrame here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;