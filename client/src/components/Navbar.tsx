import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about-sir' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={` h-[8vh] pt-2 sticky bg-white top-0 z-40 w-full transition-all duration-300 ${isScrolled
          ? ' backdrop-blur-md shadow-sm border-b border-[#E2E8F0]'
          : ' border-b border-white'}`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group text-left"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
          >
            <div className="w-10 h-10 rounded-xl  text-[#F6C945] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Flame size={22} className="stroke-[2.2] fill-[#F6C945]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-[#172554] tracking-tight leading-tight">
                Achieve <span className="text-[#172554] font-extrabold">Computer</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[15px] font-semibold text-[#1E293B] hover:text-[#172554] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F6C945] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 bg-[#F6C945] hover:bg-[#eab308] text-[#0F172A] font-bold text-sm rounded-xl transition-all shadow-sm hover:shadow active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Talk to Sir</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenContact}
              className="sm:hidden px-3 py-1.5 bg-[#F6C945] text-[#0F172A] font-bold text-xs rounded-lg shadow-sm"
            >
              Contact Us
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#172554] hover:bg-[#FFFCF5] rounded-xl border border-[#E2E8F0] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Slide-Out Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="relative ml-auto w-4/5 max-w-sm bg-[#FFFFFF] h-full shadow-2xl flex flex-col justify-between p-6 z-10 border-l border-[#E2E8F0]"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#172554] text-[#F6C945] flex items-center justify-center">
                      <Flame size={18} className="fill-[#F6C945]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#172554]">Achieve Computer</div>
                      <div className="text-[10px] text-[#64748B]">Nirmani Dutta Lane, Kolkata</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-[#64748B] hover:bg-[#FFFCF5]"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-1.5 mt-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-[15px] font-semibold text-[#1E293B] hover:bg-[#FFFCF5] hover:text-[#172554] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={16} className="text-[#64748B]" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#E2E8F0]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 bg-[#F6C945] hover:bg-[#eab308] text-[#0F172A] font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>Contact Us / Admissions</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
