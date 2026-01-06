import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Award, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="text-red-500" />,
      title: "Compassion (Karuna)",
      desc: "We serve with empathy, recognizing the dignity in every individual we support."
    },
    {
      icon: <Target className="text-blue-500" />,
      title: "Purpose-Led",
      desc: "Every project is data-driven to ensure we solve the root cause of social issues."
    },
    {
      icon: <ShieldCheck className="text-green-500" />,
      title: "Radical Honesty",
      desc: "We maintain 100% transparency in our financial dealings and impact reporting."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- Section 1: The Visionary Hero --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-600 font-bold tracking-widest uppercase text-sm"
          >
            Our Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mt-4 mb-8"
          >
            Driven by <span className="text-orange-500">Seva</span>,<br /> 
            Guided by Integrity.
          </motion.h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Founded in the heart of India, Samaaj Seva began with a simple thought: 
            "No one should be left behind." Today, we are a community of thousands 
            dedicated to lifting the underserved through sustainable action.
          </p>
        </div>
      </section>

      {/* --- Section 2: Mission & Vision Cards --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <Eye className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              Our Vision <Eye />
            </h2>
            <p className="text-green-50 text-lg leading-relaxed">
              To create an India where every child is educated, every family is 
              food-secure, and every citizen has access to quality healthcare, 
              regardless of their socio-economic background.
            </p>
          </div>
          <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <Target className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              Our Mission <Target />
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To bridge the gap between compassionate donors and ground-level 
              requirements through a transparent, tech-enabled donation platform 
              that ensures 100% impact delivery.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: Core Values --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">The Values We Live By</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Founders / Team Intro --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                alt="Our Founder" 
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-100 rounded-full -z-0"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Award className="text-orange-500 mb-6" size={40} />
            <h2 className="text-4xl font-bold mb-6 italic">"True wealth is the good we do in this world."</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our founder, Dr. Anjali Sharma, started Samaaj Seva after spending a decade 
              volunteering in rural Odisha. She realized that while people wanted to help, 
              they lacked a trustworthy medium. 
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-orange-500"></div>
              <span className="font-bold text-gray-900 uppercase tracking-widest">Anjali Sharma, Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: Stats / Team Count --- */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-green-600 mb-1">500+</div>
            <div className="text-gray-400 text-sm uppercase font-bold">Volunteers</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-600 mb-1">15+</div>
            <div className="text-gray-400 text-sm uppercase font-bold">States Covered</div>
          </div>
          <div>
            <div className="text-4xl font-black text-orange-600 mb-1">2018</div>
            <div className="text-gray-400 text-sm uppercase font-bold">Founded In</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-1">100%</div>
            <div className="text-gray-400 text-sm uppercase font-bold">Selfless Spirit</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;