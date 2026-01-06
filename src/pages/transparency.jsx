import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, PieChart, TrendingUp, Users } from 'lucide-react';

const Transparency = () => {
  const stats = [
    { label: "Direct Impact", value: "92%", color: "bg-green-500" },
    { label: "Fundraising", value: "5%", color: "bg-blue-500" },
    { label: "Administration", value: "3%", color: "bg-orange-500" },
  ];

  const reports = [
    { year: "2024-25", title: "Annual Impact Report", size: "2.4 MB" },
    { year: "2023-24", title: "Financial Audit Statement", size: "1.8 MB" },
    { year: "2023-24", title: "Quarterly Program Update", size: "3.1 MB" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- Header Section --- */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6"
          >
            <ShieldCheck size={16} /> 100% Audited & Transparent
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Your Trust is Our <span className="text-green-600">Foundation</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We believe that every rupee donated is a sacred trust. Here is a breakdown of how we manage funds to ensure maximum impact on the ground.
          </p>
        </div>
      </section>

      {/* --- Financial Breakdown Section --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Chart Placeholder */}
            <div className="relative flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[20px] border-gray-100 flex items-center justify-center relative">
                 <div className="text-center">
                    <PieChart size={48} className="text-green-600 mx-auto mb-2" />
                    <span className="block text-2xl font-bold text-gray-800">Funds</span>
                    <span className="text-gray-400 text-sm italic">Allocation</span>
                 </div>
                 {/* Decorative elements representing chart segments */}
                 <div className="absolute top-0 left-0 w-full h-full rounded-full border-[20px] border-transparent border-t-green-500 rotate-[45deg]"></div>
              </div>
            </div>

            {/* Stats Breakdown */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Where does the money go?</h2>
              <div className="space-y-6">
                {stats.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-gray-700">{item.label}</span>
                      <span className="font-bold text-gray-900">{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: item.value }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className={`${item.color} h-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 italic text-sm">
                *Percentages are based on the 2024 Audited Financial Statement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Document Downloads --- */}
      <section className="py-20 bg-gray-900 text-white rounded-[3rem] mx-4 mb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Official Reports</h2>
              <p className="text-gray-400">Download our audited financial and impact reports in PDF format.</p>
            </div>
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl">
                <TrendingUp className="text-green-400" />
                <span className="text-sm">Our administrative costs are 40% lower than the industry average.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reports.map((doc, i) => (
              <div key={i} className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-3xl transition-all cursor-pointer border border-gray-700">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-900 rounded-xl group-hover:text-green-400 transition-colors">
                    <FileText size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase">{doc.year}</span>
                </div>
                <h3 className="font-bold text-lg mb-4">{doc.title}</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{doc.size}</span>
                  <button className="flex items-center gap-2 text-green-400 font-bold">
                    Download <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final Ethics Statement --- */}
      <section className="py-20 text-center container mx-auto px-6">
        <Users className="mx-auto text-green-600 mb-6" size={48} />
        <h2 className="text-3xl font-bold mb-6">Governed by Ethics</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
          Our board of directors serves voluntarily and receives no compensation from the foundation. 
          Every donation is tracked through a unique transaction ID, and donors receive an 80G tax certificate 
          and an impact report showing the specific project their funds supported.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <img src="https://via.placeholder.com/120x60?text=ISO+Certified" alt="ISO" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
          <img src="https://via.placeholder.com/120x60?text=80G+Approved" alt="80G" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
          <img src="https://via.placeholder.com/120x60?text=NITI+Aayog" alt="Niti" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
        </div>
      </section>
    </div>
  );
};

export default Transparency;