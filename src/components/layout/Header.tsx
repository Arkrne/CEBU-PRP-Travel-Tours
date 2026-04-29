import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
      <span className="text-brand-navy font-black text-xl">P</span>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-white font-black text-xl italic tracking-tighter">CEBU PRP</span>
      <span className="text-brand-gold font-bold text-[8px] tracking-[0.3em] uppercase">Travel & Tours</span>
    </div>
  </div>
);

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center glass-dark border-b border-white/5"
    >
      <Link to="/">
        <Logo />
      </Link>
      
      <nav className="hidden lg:flex space-x-10 text-[10px] font-black tracking-[0.3em] text-white/60">
        <a href="#top" className="hover:text-brand-gold transition-colors">HOME</a>
        <a href="#fleet" className="hover:text-brand-gold transition-colors">FLEET</a>
        <a href="#tours" className="hover:text-brand-gold transition-colors">TOUR PACKAGES</a>
        <Link to="/contact" className="hover:text-brand-gold transition-colors">CONTACT</Link>
      </nav>

      <div className="flex items-center space-x-8">
        <div className="hidden sm:flex flex-col items-end mr-4 border-r border-white/10 pr-8">
           <span className="text-[8px] text-white/30 font-bold uppercase tracking-widest">Book via WhatsApp</span>
           <span className="text-sm text-brand-gold font-black italic">+63 9XX XXX XXXX</span>
        </div>
        <Link 
          to="/booking" 
          className="px-8 py-3 bg-brand-gold text-brand-navy rounded-sm text-[10px] font-black tracking-widest hover:bg-white transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
        >
          BOOK NOW
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
