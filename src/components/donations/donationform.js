import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  Info,
  Heart
} from 'lucide-react';

const DonationForm = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('1000');
  const [isMonthly, setIsMonthly] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '' // Required for 80G tax receipt in India
  });

  const quickAmounts = ['500', '1000', '2500', '5000'];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
      {/* Form Header / Progress */}
      <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Make a Donation</h2>
          <p className="text-sm text-gray-500">Step {step} of 3</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-2 w-8 rounded-full transition-all duration-300 ${step >= s ? 'bg-green-600' : 'bg-gray-200'}`} 
            />
          ))}
        </div>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {/* STEP 1: AMOUNT SELECTION */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="step1"
            >
              <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                <button 
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-2 rounded-lg font-semibold transition-all ${!isMonthly ? 'bg-white shadow-sm text-green-600' : 'text-gray-500'}`}
                >One-time</button>
                <button 
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-2 rounded-lg font-semibold transition-all ${isMonthly ? 'bg-white shadow-sm text-green-600' : 'text-gray-500'}`}
                >Monthly 🎁</button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`py-4 rounded-2xl border-2 font-bold transition-all ${amount === amt ? 'border-green-600 bg-green-50 text-green-600' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <div className="relative mb-8">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">₹</span>
                <input 
                  type="number"
                  placeholder="Other Amount"
                  className="w-full pl-8 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-green-600 outline-none font-bold text-lg"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button 
                onClick={nextStep}
                className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-100 hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                Continue <Heart size={20} />
              </button>
            </motion.div>
          )}

          {/* STEP 2: DONOR DETAILS */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="step2"
            >
              <div className="space-y-4 mb-8">
                <input 
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={handleInputChange}
                />
                <input 
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={handleInputChange}
                />
                <input 
                  name="phone"
                  placeholder="Mobile Number (for WhatsApp updates)"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={handleInputChange}
                />
                <div className="p-4 bg-blue-50 rounded-xl flex gap-3 border border-blue-100">
                  <Info className="text-blue-600 shrink-0" size={20} />
                  <p className="text-xs text-blue-800">
                    Entering your PAN helps us issue your <b>80G Tax-Exemption certificate</b> automatically.
                  </p>
                </div>
                <input 
                  name="pan"
                  placeholder="PAN Card Number (Optional)"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none uppercase"
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-1 py-4 font-bold text-gray-500">Back</button>
                <button 
                  onClick={nextStep}
                  className="flex-[2] bg-green-600 text-white py-4 rounded-2xl font-bold"
                >
                  Proceed to Pay
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: PAYMENT METHOD */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              key="step3"
            >
              <div className="mb-6 text-center">
                <p className="text-gray-500 mb-1">Total Contribution</p>
                <h3 className="text-4xl font-black text-gray-900">₹{amount}</h3>
              </div>

              <div className="space-y-3 mb-8">
                <button className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-green-600 bg-green-50">
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-green-600" />
                    <div className="text-left">
                      <p className="font-bold">UPI / QR Code</p>
                      <p className="text-xs text-gray-500">GPay, PhonePe, Paytm</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-green-600" />
                </button>
                <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
                  <CreditCard className="text-gray-400" />
                  <div className="text-left">
                    <p className="font-bold text-gray-700">Cards / Netbanking</p>
                  </div>
                </button>
              </div>

              <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-200 flex items-center justify-center gap-2">
                Pay Securely <ShieldCheck size={22} />
              </button>
              
              <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-widest font-bold">
                🔒 SSL Encrypted & Secured by Razorpay
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DonationForm;