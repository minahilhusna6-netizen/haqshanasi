import React, { useState } from 'react';
import { PageNav } from '../types';
import { Scale, MessageSquare, BookOpen, PhoneCall, Info, Menu, X, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  currentPage: PageNav;
  onNavigate: (page: PageNav) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick Safety Exit function
  const handleQuickExit = () => {
    window.location.href = 'https://www.google.com';
  };

  const navItems: { id: PageNav; label: string; urduLabel: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', urduLabel: 'صفحہ اول', icon: <Scale className="w-4 h-4" /> },
    { id: 'chat', label: 'AI Legal Assistant', urduLabel: 'اے آئی قانونی معاون', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'library', label: 'Rights Library', urduLabel: 'حقوق لائبریری', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'resources', label: 'Emergency & Helplines', urduLabel: 'ہیلپ لائنز و امداد', icon: <PhoneCall className="w-4 h-4" /> },
    { id: 'about', label: 'About', urduLabel: 'ہمارے بارے میں', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E8] border-b-2 border-[#1A1A1A]">
      {/* Top Emergency Ticker */}
      <div className="bg-[#B85C38] text-[#F5F0E8] text-xs py-1.5 px-4 font-semibold flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse overflow-x-auto whitespace-nowrap">
          <span className="bg-[#1A1A1A] text-white px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-mono">24/7 HELPLINE</span>
          <span>Ministry of Human Rights: <a href="tel:1099" className="underline font-bold hover:text-white">1099</a></span>
          <span className="opacity-40">•</span>
          <span>Edhi Emergency: <a href="tel:115" className="underline font-bold hover:text-white">115</a></span>
          <span className="opacity-40">•</span>
          <span>Cyber Harassment: <a href="tel:080039393" className="underline font-bold hover:text-white">0800-39393</a></span>
        </div>
        
        {/* Quick Safety Exit Button */}
        <button
          onClick={handleQuickExit}
          className="ml-4 bg-[#1A1A1A] hover:bg-red-700 text-white text-[11px] font-bold px-2.5 py-0.5 rounded flex items-center space-x-1 transition-colors shrink-0"
          title="Instantly leave this site to Google for safety"
        >
          <ShieldAlert className="w-3 h-3 text-amber-400" />
          <span>Quick Safety Exit</span>
        </button>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-[#1A1A1A]/10">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => onNavigate('home')} 
            className="cursor-pointer group flex items-center space-x-3 space-x-reverse"
          >
            <div className="w-10 h-10 bg-[#B85C38] text-[#F5F0E8] flex items-center justify-center font-serif font-bold text-xl border-2 border-[#1A1A1A]">
              حق
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#B85C38] transition-colors">
                  Haq<span className="text-[#B85C38]">Shanasi</span>
                </span>
                <span className="font-urdu text-lg text-[#B85C38] font-bold">
                  حق شناسی
                </span>
              </div>
              <p className="text-[10px] text-[#4A4A4A] tracking-[0.2em] uppercase font-bold">
                A Digital Guardian for Women's Rights
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`py-2 transition-colors cursor-pointer border-b-2 ${
                    isActive
                      ? 'border-[#B85C38] text-[#B85C38]'
                      : 'border-transparent hover:text-[#B85C38]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Start Consultation Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onNavigate('chat')}
              className="px-6 py-2.5 bg-[#B85C38] hover:bg-[#9A4A2B] text-[#F5F0E8] text-xs font-bold uppercase tracking-widest border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] transition-all cursor-pointer"
            >
              Start Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#1A1A1A] bg-[#EFE8DC] text-[#1A1A1A]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b-2 border-[#1A1A1A] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 font-semibold text-base flex items-center justify-between border ${
                  isActive
                    ? 'bg-[#B85C38] text-[#F5F0E8] border-[#1A1A1A]'
                    : 'text-[#1A1A1A] bg-[#EFE8DC] border-[#1A1A1A]/20'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <span className="font-urdu text-sm">{item.urduLabel}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
