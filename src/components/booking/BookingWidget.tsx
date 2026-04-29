import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Users, ArrowRight, Briefcase, Plane, CreditCard, Wallet, Smartphone, ShieldCheck } from 'lucide-react';

const BookingWidget = () => {
  const [step, setStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const paymentLinkUrl = import.meta.env.VITE_CARD_PAYMENT_URL as string | undefined;

  const steps = [
    { icon: <MapPin size={18} />, label: "Destination" },
    { icon: <Calendar size={18} />, label: "Schedule" },
    { icon: <Users size={18} />, label: "Details" },
    { icon: <CreditCard size={18} />, label: "Payment" }
  ];

  const paymentOptions = [
    { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard size={20} />, sub: 'Via hosted secure checkout' },
    { id: 'gcash', name: 'GCash', icon: <Smartphone size={20} />, sub: 'Direct e-Wallet Transfer' },
    { id: 'maya', name: 'Maya', icon: <Wallet size={20} />, sub: 'Digital Bank Payment' },
    { id: 'qr', name: 'QR Ph', icon: <Smartphone size={20} />, sub: 'Scan to Pay' }
  ];

  const handleFinalize = () => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    if (paymentMethod !== 'card') {
      setStatusMessage('Booking request saved. Please complete payment through your selected method.');
      return;
    }

    if (!paymentLinkUrl) {
      setStatusMessage('Set VITE_CARD_PAYMENT_URL to your secure checkout link to accept card payments.');
      return;
    }

    setStatusMessage('Redirecting to secure card checkout...');
    window.location.assign(paymentLinkUrl);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-gold/50 via-transparent to-brand-blue/50 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative bg-brand-navy/90 backdrop-blur-3xl p-10 md:p-12 rounded-[30px] border border-white/5 shadow-2xl">
        <div className="flex justify-between items-center mb-12">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border ${
                  step >= i ? 'bg-brand-gold border-brand-gold text-brand-navy shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'bg-white/5 border-white/10 text-white/40'
                }`}
              >
                {s.icon}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 md:w-12 h-[1px] mx-2 md:mx-4 ${step > i ? 'bg-brand-gold' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight italic">
                {step === 0 && "Where to next?"}
                {step === 1 && "When shall we arrive?"}
                {step === 2 && "Finalize your journey"}
                {step === 3 && "Secure Payment"}
              </h3>
              <p className="text-white/30 text-sm uppercase tracking-widest font-bold">
                Step {step + 1} of 4
              </p>
            </div>

            <div className="space-y-4">
              {step === 0 && (
                <>
                  <div className="group/input relative">
                    <input 
                      type="text" 
                      placeholder="Pickup Location" 
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/50 transition-all"
                    />
                    <Plane size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-brand-gold transition-colors" />
                  </div>
                  <div className="group/input relative">
                    <input 
                      type="text" 
                      placeholder="Dropoff Location" 
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/50 transition-all"
                    />
                    <MapPin size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-brand-gold transition-colors" />
                  </div>
                </>
              )}
              {step === 1 && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Date</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white focus:outline-none focus:border-brand-gold/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Time</label>
                    <input type="time" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white focus:outline-none focus:border-brand-gold/50" />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group/input">
                    <Users size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" />
                    <select className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-xl text-white appearance-none focus:outline-none focus:border-brand-gold/50">
                      <option>1-2 Pax</option>
                      <option>3-4 Pax</option>
                      <option>5+ Pax</option>
                    </select>
                  </div>
                  <div className="relative group/input">
                    <Briefcase size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" />
                    <select className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-xl text-white appearance-none focus:outline-none focus:border-brand-gold/50">
                      <option>1-2 Bags</option>
                      <option>3-4 Bags</option>
                      <option>5+ Bags</option>
                    </select>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {paymentOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setPaymentMethod(opt.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                          paymentMethod === opt.id
                            ? 'bg-brand-gold/10 border-brand-gold text-white shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                            : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'
                        }`}
                      >
                        <div className={`${paymentMethod === opt.id ? 'text-brand-gold' : 'text-white/20'}`}>
                          {opt.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest">{opt.name}</p>
                          <p className="text-[8px] opacity-60 uppercase tracking-tighter">{opt.sub}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-4 text-sm text-white/70">
                      <div className="flex items-center gap-2 text-brand-gold mb-2">
                        <ShieldCheck size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Secure Card Checkout</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 leading-relaxed">
                        We redirect to a PCI-compliant checkout page for credit and debit cards. Add your hosted payment link in VITE_CARD_PAYMENT_URL.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-4">
              {step > 0 && (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all text-[10px] tracking-widest uppercase"
                >
                  BACK
                </button>
              )}
              <button 
                onClick={handleFinalize}
                className="flex-1 py-5 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 group/btn text-[10px] tracking-widest uppercase"
              >
                {step === 3 ? (paymentMethod === 'card' ? 'CONTINUE TO SECURE CHECKOUT' : 'FINALIZE BOOKING') : 'NEXT STEP'}
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {statusMessage && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                {statusMessage}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between text-[10px] text-white/20 font-bold tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-brand-gold" />
            <span>Secure 256-bit SSL</span>
          </div>
          <div className="flex gap-4">
             <span className="hover:text-brand-gold cursor-pointer transition-colors">HELP</span>
             <span className="hover:text-brand-gold cursor-pointer transition-colors">SUPPORT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
