
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '회사소개', href: '#about' },
    { name: '서비스', href: '#services' },
    { name: '특장점', href: '#whyus' },
    { name: '후기', href: '#testimonials' },
    { name: '팀원', href: '#team' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-xl py-3 border-b border-gray-100' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-[#2D5A27]' : 'bg-white/90 shadow-md'}`}>
              <Heart className={`${scrolled ? 'text-white' : 'text-[#2D5A27]'} w-6 h-6`} fill="currentColor" />
            </div>
            <span className={`text-2xl font-black tracking-tight ${scrolled ? 'text-[#1F2937]' : 'text-[#1F2937]'}`}>
              실버케어 <span className="text-[#2D5A27]">파트너스</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-bold transition-all hover:text-[#2D5A27] ${
                  scrolled ? 'text-gray-600' : 'text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-[#2D5A27] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#23471e] transition-all shadow-md active:scale-95"
            >
              상담 예약
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900' : 'bg-white/80 text-gray-900 shadow-sm'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-xl font-bold text-gray-800 hover:text-[#2D5A27]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
