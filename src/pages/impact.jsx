import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Share2, TrendingUp, CheckCircle } from 'lucide-react';

const Impact = () => {
  const successStories = [
    {
      id: 1,
      name: "Aarav's New Chapter",
      tag: "Education",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      before: "Working at a tea stall to support his family.",
      after: "Ranked top 10 in his district school board exams.",
      quote: "I never thought books could change my life until Samaaj Seva stepped in."
    },
    {
      id: 2,
      name: "Laxmi's Hope",
      tag: "Medical",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      before: "Suffering from a critical heart condition with no funds.",
      after: "Successful surgery and now leading a healthy, active life.",
      quote: "Today I can breathe freely and watch my grandchildren grow."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- Section 1: Impact Hero --- */}
      <section className="relative py-24 bg-green-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-800 skew-x-12 transform translate-x-20 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Real Stories. <br />
              Real <span className="text-green-400">Change.</span>
            </h1>
            <p className="text-green-100 text-xl leading-relaxed mb-8">
              Your contributions are not just numbers in a ledger; they are the 
              reasons why these smiles exist today. See the transformation 
              you've made possible.
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-400" />
                <span className="font-bold">Verified Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-green-400" />
                <span className="font-bold">100% Impact Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Success Story Cards --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid gap-20">
          {successStories.map((story, index) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container with Label */}
              <div className="lg:w-1/2 relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={story.image} alt={story.name} className="w-full h-[500px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                  <Star className="text-orange-500 mb-2" fill="currentColor" />
                  <p className="font-bold text-gray-900">Impact Achievement</p>
                  <p className="text-sm text-gray-500">{story.tag} Success</p>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:w-1/2 space-y-6">
                <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full font-bold text-sm uppercase tracking-widest">
                  {story.tag} Case Study
                </span>
                <h2 className="text-4xl font-bold text-gray-900">{story.name}</h2>
                
                <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Before</p>
                    <p className="text-gray-700 font-medium">{story.before}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-600 uppercase mb-2">After</p>
                    <p className="text-gray-900 font-bold">{story.after}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-[2rem] relative">
                  <Quote className="absolute top-4 right-6 text-gray-200" size={48} />
                  <p className="text-xl italic text-gray-700 leading-relaxed relative z-10">
                    "{story.quote}"
                  </p>
                </div>

                <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-green-600 transition-colors">
                  <Share2 size={20} /> Share this joy with others
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 3: The Ripple Effect (Grid) --- */}
      <section className="py-24 bg-gray-50 rounded-[4rem] mx-4 mb-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">The Ripple Effect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
              <div className="text-5xl font-black text-green-600 mb-4">12k</div>
              <p className="font-bold text-gray-800 mb-2">Livelihoods Created</p>
              <p className="text-gray-500 text-sm">Empowering families to become self-sufficient through skill training.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-green-600">
              <div className="text-5xl font-black text-green-600 mb-4">95%</div>
              <p className="font-bold text-gray-800 mb-2">Sustainability Rate</p>
              <p className="text-gray-500 text-sm">Our projects continue to thrive long after the initial funding phase.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
              <div className="text-5xl font-black text-green-600 mb-4">24/7</div>
              <p className="font-bold text-gray-800 mb-2">Ground Support</p>
              <p className="text-gray-500 text-sm">Our local volunteers ensure that help reaches the right person at the right time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to create a new story?</h2>
        <p className="text-gray-500 mb-10 text-lg">Your contribution can be the turning point in someone's life.</p>
        <button className="bg-green-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-green-700 shadow-xl shadow-green-100 transition-all transform hover:scale-105">
          Become a Change Maker
        </button>
      </section>
    </div>
  );
};

export default Impact;