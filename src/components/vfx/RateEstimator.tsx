import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const RateEstimator = () => {
  const [distance, setDistance] = useState(25);
  
  const baseRate = 500; // PHP base rate
  const perKm = 25; // PHP per km
  const total = baseRate + (distance * perKm);

  return (
    <section className="py-32 px-6 md:px-12 bg-white/0">
      <div className="max-w-7xl mx-auto">
        <div className="glass-dark p-12 md:p-20 rounded-[40px] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -mr-64 -mt-64" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="text-brand-gold" size={24} />
                <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase">Metro Cebu & Province</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white mb-8">
                RATE <br />
                <span className="text-brand-blue">CALCULATOR.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-md mb-12">
                Get an instant estimate for your airport transfer or province-wide tour. 
                Transparent pricing for all Cebu routes.
              </p>
              
              <div className="space-y-6">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">ACCEPTED PAYMENTS</p>
                <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white">GCASH</div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white">MAYA</div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white">QR PH</div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white">PAYPAL</div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-[0.3em]">Estimated Distance</span>
                  <span className="text-3xl font-black italic text-brand-gold">{distance} KM</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
              </div>

              <div className="p-10 bg-brand-navy rounded-3xl border border-white/5 shadow-2xl">
                <div className="flex justify-between items-center mb-8 pb-8 border-b border-white/5">
                   <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Est. Fare (PHP)</span>
                   <span className="text-5xl font-black italic text-white">₱{total.toLocaleString()}</span>
                </div>
                <button className="w-full py-5 bg-brand-gold text-brand-navy font-bold rounded-xl flex items-center justify-center gap-3 group transition-all">
                  BOOK NOW
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateEstimator;
