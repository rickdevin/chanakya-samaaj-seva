import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight, 
  BookOpen, 
  Utensils, 
  Stethoscope, 
  Leaf 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  
  // Data for Featured Causes
  const causes = [
    {
      title: "Education for All",
      desc: "Providing books, uniforms, and digital tools to rural students.",
      icon: <BookOpen className="text-blue-600" />,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      progress: 75,
    },
    {
      title: "Mission Annapurna",
      desc: "Distributing nutritious cooked meals to daily wage earners.",
      icon: <Utensils className="text-orange-600" />,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      progress: 40,
    },
    {
      title: "Medical Seva",
      desc: "Funding critical surgeries and mobile health clinics.",
      icon: <Stethoscope className="text-red-600" />,
      image: "https://images.unsplash.com/photo-1584515606493-a07717df2f0a?auto=format&fit=crop&w=800&q=80",
      progress: 90,
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80" 
            alt="Social Work India" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              Verified Samaaj Seva Initiative
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
              Empowering <span className="text-green-600">Lives</span>, <br />
              Restoring <span className="text-orange-500">Dignity</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Every small contribution creates a massive ripple of change. Join thousands of Indians in making a transparent, ground-level impact today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-200 transition-all flex items-center gap-2">
                Donate Now <Heart size={20} />
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-green-600 px-8 py-4 rounded-xl font-bold transition-all">
                See Our Impact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TRUST INDICATORS --- */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><ShieldCheck /></div>
              <div>
                <h4 className="font-bold">100% Transparent</h4>
                <p className="text-sm text-gray-500">Direct fund tracking for every rupee.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Zap /></div>
              <div>
                <h4 className="font-bold">80G Tax Benefit</h4>
                <p className="text-sm text-gray-500">Save tax while saving lives.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="bg-green-100 p-3 rounded-full text-green-600"><Users /></div>
              <div>
                <h4 className="font-bold">Community Driven</h4>
                <p className="text-sm text-gray-500">Verified ground-level volunteers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED CAUSES --- */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Urgent Causes</h2>
              <p className="text-gray-500">Support these initiatives that need immediate attention.</p>
            </div>
            <button className="text-green-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {causes.map((cause, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img src={cause.image} alt={cause.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                    {cause.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{cause.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{cause.desc}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 h-2 rounded-full mb-2">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: `${cause.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-gray-400 mb-6 uppercase tracking-wider">
                    <span>{cause.progress}% Raised</span>
                    <span className="text-green-600">Target: ₹5,00,000</span>
                  </div>

                  <button className="w-full py-3 rounded-xl border-2 border-green-600 text-green-600 font-bold hover:bg-green-600 hover:text-white transition-all">
                    Donate Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPACT NUMBERS (Animated Placeholder) --- */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">The Impact We Created Together</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-extrabold mb-2">1.2M+</div>
              <div className="text-green-100 opacity-80 uppercase tracking-widest text-sm">Meals Served</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">45K+</div>
              <div className="text-green-100 opacity-80 uppercase tracking-widest text-sm">Kids Educated</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">850+</div>
              <div className="text-green-100 opacity-80 uppercase tracking-widest text-sm">Medical Camps</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">120+</div>
              <div className="text-green-100 opacity-80 uppercase tracking-widest text-sm">Villages Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-orange-50 rounded-[3rem] p-12 text-center border border-orange-100">
            <h2 className="text-4xl font-bold mb-6 italic text-gray-800">"Service to humanity is service to God."</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              You don't need a lot to make a difference. Join our monthly giving program and be a silent hero for someone in need.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-orange-200 transition-all transform hover:scale-105">
              Start Your Seva Journey
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;