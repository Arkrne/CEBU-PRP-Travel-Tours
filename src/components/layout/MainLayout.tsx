import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-brand-navy text-white selection:bg-brand-gold selection:text-brand-navy">
      <Header />
      <main>
        <Outlet />
      </main>
      
      <footer id="contact" className="py-20 px-6 md:px-12 border-t border-white/5 mt-20 bg-brand-navy scroll-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black text-brand-gold mb-6 tracking-tighter italic">CEBU PRP TRAVEL & TOURS</h2>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-8">
              Your trusted partner for Metro Cebu and province-wide transfers and tours. 
              Reliable, professional, and dedicated to your journey.
            </p>
            <div className="flex gap-4 opacity-50">
               <span className="text-[10px] font-bold tracking-widest uppercase">GCash</span>
               <span className="text-[10px] font-bold tracking-widest uppercase">Maya</span>
               <span className="text-[10px] font-bold tracking-widest uppercase">PayPal</span>
               <span className="text-[10px] font-bold tracking-widest uppercase">QR PH</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-white">Our Services</h3>
            <ul className="space-y-4 text-xs text-white/30 font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cebu City Tours</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Province Packages</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Corporate Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-white">Contact Us</h3>
            <ul className="space-y-4 text-xs text-white/30 font-bold uppercase tracking-widest">
              <li>Cebu City, Philippines</li>
              <li className="text-brand-gold">+63 9XX XXX XXXX</li>
              <li>support@cebuprp.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] text-white/20 uppercase tracking-[0.4em] font-black">
          <span>&copy; 2026 Cebu PRP Travel & Tours.</span>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
