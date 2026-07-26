import React from 'react';
import { PageNav } from '../types';
import { Scale, Phone, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageNav) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F0E8] pt-16 pb-12 border-t-4 border-[#B85C38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Collaborating Partners Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[#F5F0E8]/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] text-[#B85C38]">
              COLLABORATING ORGANIZATIONS
            </div>
            <div className="flex flex-wrap gap-6 text-xs font-serif italic text-[#F5F0E8]/80">
              <span>AGHS Legal Aid Cell</span>
              <span>•</span>
              <span>Shirkat Gah</span>
              <span>•</span>
              <span>Digital Rights Foundation</span>
              <span>•</span>
              <span>Umang Pakistan</span>
            </div>
          </div>
          <div className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#F5F0E8]/40">
            STRICTLY GENERAL LEGAL INFORMATION
          </div>
        </div>

        {/* Editorial Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F5F0E8]/20">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#B85C38] text-[#F5F0E8] flex items-center justify-center font-serif font-bold text-xl border border-white">
                حق
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-[#F5F0E8]">
                HaqShanasi
              </span>
              <span className="font-urdu text-xl text-[#B85C38] font-bold">
                حق شناسی
              </span>
            </div>
            
            <p className="text-[#EFE8DC]/80 text-sm leading-relaxed pr-4">
              <strong className="text-[#F5F0E8]">HaqShanasi</strong> (Self-Knowledge of Rights) is a dedicated digital companion empowering Pakistani women with clear, accessible, and actionable legal literacy covering marriage, divorce, inheritance, property ownership, workplace protection, and domestic safety.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#6B7F59]">
              <ShieldCheck className="w-4 h-4 text-[#B85C38]" />
              <span className="text-[#EFE8DC]/90">Based on authentic Pakistani Statutory Laws & Islamic Jurisprudence</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#B85C38] tracking-wide uppercase border-b border-[#B85C38]/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#EFE8DC]/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#B85C38] transition-colors">
                  • Home & Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('chat')} className="hover:text-[#B85C38] transition-colors">
                  • AI Legal Companion (Chat)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('library')} className="hover:text-[#B85C38] transition-colors">
                  • Statutory Rights Library
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-[#B85C38] transition-colors">
                  • Emergency Helplines & Shelters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#B85C38] transition-colors">
                  • About & Legal Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Immediate Emergency Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#B85C38] tracking-wide uppercase border-b border-[#B85C38]/30 pb-2">
              Immediate Helplines
            </h4>
            <div className="space-y-2.5 text-xs text-[#EFE8DC]/90">
              <div className="p-2.5 bg-[#2A2A2A] border border-[#B85C38]/40 flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">Ministry of Human Rights Helpline</div>
                  <div className="text-[11px] text-[#EFE8DC]/70">24/7 Legal Advice & Protection</div>
                </div>
                <a href="tel:1099" className="bg-[#B85C38] text-white px-2.5 py-1 font-bold text-sm hover:bg-[#9A4A2B]">
                  1099
                </a>
              </div>

              <div className="p-2.5 bg-[#2A2A2A] border border-[#6B7F59]/40 flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">Edhi Emergency Rescue</div>
                  <div className="text-[11px] text-[#EFE8DC]/70">Ambulance & Crisis Response</div>
                </div>
                <a href="tel:115" className="bg-[#6B7F59] text-white px-2.5 py-1 font-bold text-sm hover:bg-[#4C5B3F]">
                  115
                </a>
              </div>

              <div className="p-2.5 bg-[#2A2A2A] border border-[#F5F0E8]/20 flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">Cyber Harassment Helpline</div>
                  <div className="text-[11px] text-[#EFE8DC]/70">Digital Rights Foundation</div>
                </div>
                <a href="tel:080039393" className="bg-[#F5F0E8] text-[#1A1A1A] px-2.5 py-1 font-bold text-xs hover:bg-white">
                  0800-39393
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="my-8 p-4 bg-[#262626] border border-[#F5F0E8]/10 text-xs text-[#EFE8DC]/70 leading-relaxed space-y-1">
          <p className="font-semibold text-[#F5F0E8] uppercase tracking-wider">
            Important Legal Disclaimer:
          </p>
          <p>
            HaqShanasi is an AI-powered educational legal literacy tool created to inform Pakistani women about statutory laws and legal precedents. It provides general legal information and does <strong>NOT</strong> constitute professional legal representation or binding attorney-client counsel. For active legal disputes or court filings, please consult a licensed Advocate or contact our verified pro-bono legal aid partners (such as AGHS Legal Aid Cell or Legal Aid Society).
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#EFE8DC]/50 border-t border-[#F5F0E8]/10 pt-6">
          <div>
            © {new Date().getFullYear()} HaqShanasi (حق شناسی). Dedicated to dignity, equality, and justice for women in Pakistan.
          </div>
          <div className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Built with care for public legal empowerment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
