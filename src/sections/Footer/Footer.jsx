import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full py-8 mt-20 relative flex justify-center items-center">
      {/* Subtle Top Border Gradient */}
      <div className="absolute top-0 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="flex flex-col items-center gap-6">

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <div className="p-3 rounded-full border border-white/5 bg-white/5 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
            <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </button>

        {/* Copyright Text */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-mono text-gray-500 hover:text-white transition-colors duration-300">
            &copy; {currentYear} Avinash Mourya. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] text-gray-700 uppercase tracking-widest font-medium opacity-50 hover:opacity-100 transition-opacity">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>System Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;