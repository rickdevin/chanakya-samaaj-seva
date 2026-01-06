import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Utensils, HeartPulse, TreePine, ArrowRight, ShieldCheck } from 'lucide-react';

const causesData = [
  {
    id: 1,
    category: "Education",
    title: "Project Vidya: Schooling for Rural Kids",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    description: "In rural villages, 40% of children drop out due to lack of supplies. We provide kits containing bags, books, and uniforms.",
    icon: <BookOpen className="text-blue-600" />,
    raised: "₹3,45,000",
    target: "₹5,00,000",
    percentage: 69
  },
  {
    id: 2,
    category: "Food Security",
    title: "Zero Hunger: Daily Meal Distribution",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    description: "Feeding over 500 daily-wage laborers every evening in urban slums to ensure no one goes to bed hungry.",
    icon: <Utensils className="text-orange-600" />,
    raised: "₹1,20,000",
    target: "₹3,00,000",
    percentage: 40
  },
  {
    id: 3,
    category: "Healthcare",
    title: "Sanjeevani: Mobile Health Clinics",
    image: "https://images.unsplash.com/photo-1584515606493-a07717df2f0a?auto=format&fit=crop&w=800&q=80",
    description: "Bringing doctors and free medicines to remote hilly areas where hospitals are over 50km away.",
    icon: <HeartPulse className="text-red-600" />,
    raised: "₹8,90,000",
    target: "₹10,00,000",
    percentage: 89
  },
  {
    id: 4,
    category: "Environment",
    title: "Green India: 10k Tree Plantation",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    description: "Restoring the local ecosystem by planting native fruit-bearing trees that also provide income for farmers.",
    icon: <TreePine className="text-green-600" />,
    raised: "₹55,000",
    target: "₹2,00,000",
    percentage: 27
  }
];

const Causes = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Active <span className="text-green-600">Causes</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transparency is our core value. Choose a cause that resonates with you and track exactly how your contribution is spent.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <div className="container mx-auto px-6 -mt-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {causesData.map((cause) => (
            <motion.div 
              key={cause.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col md:flex-row"
            >
              {/* Image Side */}
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <img src={cause.image} alt={cause.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1">
                  <ShieldCheck size={14} className="text-green-600" /> Verified
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-2 bg-gray-50 rounded-lg">{cause.icon}</span>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{cause.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{cause.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {cause.description}
                  </p>
                </div>

                <div>
                  {/* Progress Bar */}
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-green-600">{cause.raised} <span className="text-gray-400 font-normal">raised</span></span>
                    <span className="text-xs font-medium text-gray-400">Goal: {cause.target}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full mb-6">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${cause.percentage}%` }}
                      transition={{ duration: 1 }}
                      className="bg-green-500 h-full rounded-full relative"
                    >
                      <span className="absolute -right-2 -top-6 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded">
                        {cause.percentage}%
                      </span>
                    </motion.div>
                  </div>

                  <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2 group">
                    Donate to this Cause
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Causes;