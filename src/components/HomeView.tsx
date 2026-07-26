import React from 'react';
import { PageNav, RightsCategory } from '../types';
import { RIGHTS_CATEGORIES } from '../data/legalData';
import { MessageSquare, BookOpen, ArrowRight, ShieldCheck, Scale, PhoneCall, AlertTriangle } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageNav) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectCategory }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. EDITORIAL HERO SECTION (Bold Typography Asymmetric Grid Layout) */}
      <section className="border-b-2 border-[#1A1A1A] bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          
          {/* Issue Header Tag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#1A1A1A]/20 pb-3 mb-10 text-xs font-mono tracking-[0.25em] text-[#1A1A1A] uppercase font-bold gap-2">
            <span>VOLUME I • PUBLIC LEGAL LITERACY INITIATIVE</span>
            <span className="font-urdu text-sm font-bold text-[#B85C38]">حقوق نسواں کا قانونی تحفظ</span>
            <span>A DIGITAL GUARDIAN FOR WOMEN'S RIGHTS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#1A1A1A] bg-[#FAF8F5] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
            
            {/* Left Asymmetric Column: Bold Typography Main Statement */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-[#1A1A1A] bg-[#FAF8F5]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B7F59] mb-6 block">
                  A DIGITAL GUARDIAN FOR WOMEN'S RIGHTS
                </span>

                <h1 className="font-serif font-black text-5xl sm:text-7xl lg:text-[84px] leading-[0.92] text-[#1A1A1A] mb-8 tracking-tighter">
                  Know Your <br />
                  <span className="text-[#B85C38] italic font-serif">Legal</span> Rights.
                </h1>

                <p className="font-urdu text-2xl text-[#B85C38] leading-relaxed font-bold mb-6">
                  پاکستان کے آئین اور شرعی قوانین کے تحت اپنے بنیادی حقوق کو جانیں۔
                </p>

                <p className="text-lg sm:text-xl max-w-lg leading-relaxed text-[#1A1A1A]/90 font-sans mb-10">
                  HaqShanasi is an AI-powered legal companion designed to empower Pakistani women with knowledge of their fundamental rights in marriage, property, and the workplace.
                </p>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                  <button
                    onClick={() => onNavigate('chat')}
                    className="bg-[#B85C38] hover:bg-[#9A4A2B] text-[#F5F0E8] px-8 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-3 border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Start Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('library')}
                    className="bg-[#EFE8DC] hover:bg-[#F5F0E8] text-[#1A1A1A] px-8 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-3 border-2 border-[#1A1A1A] transition-all cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#6B7F59]" />
                    <span>Explore Library</span>
                  </button>
                </div>
              </div>

              {/* Numbered Category Highlights with Terracotta Borders */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-[#1A1A1A]">
                <div className="flex flex-col border-l-4 border-[#B85C38] pl-4 py-1">
                  <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1A1A1A]">01.</span>
                  <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest mt-1 text-[#4A4A4A]">
                    Inheritance
                  </span>
                </div>

                <div className="flex flex-col border-l-4 border-[#B85C38] pl-4 py-1">
                  <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1A1A1A]">02.</span>
                  <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest mt-1 text-[#4A4A4A]">
                    Nikahnama
                  </span>
                </div>

                <div className="flex flex-col border-l-4 border-[#B85C38] pl-4 py-1">
                  <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1A1A1A]">03.</span>
                  <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest mt-1 text-[#4A4A4A]">
                    Custody
                  </span>
                </div>
              </div>

            </div>

            {/* Right Asymmetric Column: Dark Sage Rights Panel */}
            <div className="lg:col-span-5 bg-[#6B7F59] p-8 sm:p-12 flex flex-col justify-between text-[#F5F0E8]">
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#F5F0E8]/70 block mb-2">
                    STATUTORY INDEX
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif italic font-bold mb-4 text-[#F5F0E8]">
                    Legal Rights Library
                  </h2>
                  <p className="text-sm leading-relaxed text-[#F5F0E8]/90">
                    Explore detailed articles cited with authentic Pakistani statutes including the Muslim Family Laws Ordinance (1961) and Protection Against Harassment at the Workplace Act (2010).
                  </p>
                </div>

                {/* Category Direct Jump List */}
                <div className="space-y-2 border-t border-[#F5F0E8]/20 pt-4">
                  {[
                    { id: 'marriage', title: 'Marriage Rights & Nikahnama Column 18' },
                    { id: 'divorce', title: 'Divorce & Khula Legal Procedure' },
                    { id: 'workplace', title: 'Workplace Protection Laws 2010' },
                    { id: 'domestic_violence', title: 'Domestic Violence & Protection Orders' },
                    { id: 'inheritance', title: 'Islamic Inheritance & Property Rights' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate('library');
                        if (onSelectCategory) onSelectCategory(item.id);
                      }}
                      className="w-full flex justify-between items-center py-3 border-b border-[#F5F0E8]/15 text-sm font-semibold tracking-wide text-[#F5F0E8] hover:text-[#B85C38] hover:bg-[#F5F0E8] hover:px-3 transition-all text-left group cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Emergency Help Lines Box */}
              <div className="pt-8">
                <div className="bg-[#F5F0E8]/10 p-6 border-2 border-[#F5F0E8]/30 space-y-3">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] block text-amber-200">
                    24/7 EMERGENCY HELPLINES
                  </span>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="flex flex-col border-r border-[#F5F0E8]/20 pr-2">
                      <span className="text-[#F5F0E8]/80 text-[11px]">Women Helpline</span>
                      <a href="tel:1099" className="text-2xl font-bold font-serif text-white mt-1 hover:underline">
                        1099
                      </a>
                    </div>
                    <div className="flex flex-col pl-2">
                      <span className="text-[#F5F0E8]/80 text-[11px]">Edhi Emergency</span>
                      <a href="tel:115" className="text-2xl font-bold font-serif text-white mt-1 hover:underline">
                        115
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. MISSION STATEMENT & CORE COMMITMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8EFE3] border-2 border-[#6B7F59] p-8 md:p-10 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4C5B3F] uppercase">
              OUR MISSION • ہمارا مقصد
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              Closing the Legal Literacy Gap for Every Daughter, Sister, and Mother in Pakistan.
            </h2>
            <p className="text-[#1A1A1A]/80 text-base leading-relaxed">
              In Pakistan, procedural complexity and social taboos often prevent women from asserting their rights. <strong className="text-[#1A1A1A]">HaqShanasi</strong> demystifies the legal process by providing direct citations from statutory acts, step-by-step enforcement guides, and instant AI-assisted legal guidance in simple language.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SIX RIGHTS CATEGORIES (Editorial Magazine Layout - NO ICON IN CIRCLES, NO GRADIENTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="border-b-2 border-[#1A1A1A] pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B85C38] font-bold">
              STATUTORY GUIDES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Explore Key Legal Rights Categories
            </h2>
          </div>
          <p className="text-sm text-[#4A4A4A] max-w-md">
            Click on any category to access complete statutory analyses, Pakistani court precedents, and step-by-step action guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RIGHTS_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-[#FAF8F5] border-2 border-[#1A1A1A] p-6 space-y-4 flex flex-col justify-between hover:border-[#B85C38] transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-2">
                  <span className="font-mono text-xs font-bold text-[#B85C38]">
                    0{idx + 1} // CATEGORY
                  </span>
                  <span className="font-urdu text-sm font-bold text-[#6B7F59]">
                    {cat.urduTitle}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-snug">
                  {cat.title}
                </h3>

                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {cat.summary}
                </p>

                {/* Key Laws list */}
                <div className="pt-2 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-[#1A1A1A] uppercase tracking-wider block">
                    Governing Laws:
                  </span>
                  {cat.keyLaws.slice(0, 2).map((law, i) => (
                    <div key={i} className="text-xs text-[#6B7F59] font-medium flex items-center space-x-1">
                      <span>•</span>
                      <span>{law}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('library');
                  if (onSelectCategory) onSelectCategory(cat.id);
                }}
                className="mt-4 w-full bg-[#EFE8DC] hover:bg-[#B85C38] hover:text-white text-[#1A1A1A] py-2.5 px-4 font-bold text-sm border border-[#1A1A1A] flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Read Full Legal Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </section>

      {/* 4. AI LEGAL COMPANION PROMPT SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] text-[#F5F0E8] p-8 md:p-12 border-2 border-[#1A1A1A] space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <span className="bg-[#B85C38] text-white text-xs font-mono px-3 py-1 uppercase tracking-widest font-bold inline-block">
                INTERACTIVE AI ASSISTANT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F0E8]">
                Have a Specific Legal Question? Talk to HaqShanasi AI.
              </h2>
              <p className="text-[#EFE8DC]/80 text-base leading-relaxed">
                Ask questions in English or Urdu regarding your Nikahnama rights, Khula timelines, inheritance calculation, or filing workplace complaints. Our sisterly AI companion provides clear, empathetic legal information.
              </p>
            </div>

            <div className="md:col-span-5 flex justify-start md:justify-end">
              <button
                onClick={() => onNavigate('chat')}
                className="bg-[#B85C38] hover:bg-[#9A4A2B] text-white px-8 py-4 text-lg font-bold border border-white flex items-center space-x-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Start Legal Chat</span>
              </button>
            </div>

          </div>

          {/* Sample Prompts Grid */}
          <div className="border-t border-[#F5F0E8]/20 pt-6 space-y-3">
            <span className="text-xs font-mono uppercase text-[#B85C38] tracking-widest font-bold block">
              SAMPLE QUESTIONS YOU CAN ASK:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "What rights should I specify in Column 21 of my Nikahnama?",
                "What is the procedure for Khula in Pakistani Family Court?",
                "How is female inheritance calculated under Islamic law in Pakistan?",
                "What steps can I take against workplace harassment under the 2010 Act?",
                "Can my husband prevent me from seeing my children after separation?",
                "How can I obtain a court protection order if facing domestic abuse?"
              ].map((question, qIdx) => (
                <button
                  key={qIdx}
                  onClick={() => onNavigate('chat')}
                  className="bg-[#2A2A2A] hover:bg-[#B85C38] text-left p-3 text-xs text-[#EFE8DC] hover:text-white border border-[#F5F0E8]/10 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>"{question}"</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 shrink-0 opacity-60" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. EMERGENCY HELPLINES QUICK ACCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border-2 border-[#1A1A1A] p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1A1A1A]/20 pb-4">
            <div>
              <span className="text-xs font-mono text-[#B85C38] font-bold uppercase tracking-wider">
                IMMEDIATE ASSISTANCE
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Emergency Helplines & Safe Shelters (Darul Aman)
              </h3>
            </div>
            <button
              onClick={() => onNavigate('resources')}
              className="bg-[#6B7F59] text-white px-5 py-2.5 font-bold text-sm border border-[#1A1A1A] hover:bg-[#4C5B3F] transition-colors cursor-pointer self-start"
            >
              View All Legal Aid Orgs & Shelters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#EFE8DC] border border-[#1A1A1A] p-4 space-y-2">
              <div className="text-xs font-mono font-bold text-[#B85C38]">MINISTRY OF HUMAN RIGHTS</div>
              <div className="font-serif font-bold text-lg text-[#1A1A1A]">Women Helpline</div>
              <div className="text-xs text-[#4A4A4A]">24/7 Legal guidance & intervention</div>
              <a href="tel:1099" className="inline-block bg-[#1A1A1A] text-white font-mono font-bold px-3 py-1 text-sm mt-1">
                Call 1099
              </a>
            </div>

            <div className="bg-[#EFE8DC] border border-[#1A1A1A] p-4 space-y-2">
              <div className="text-xs font-mono font-bold text-[#6B7F59]">EDHI FOUNDATION</div>
              <div className="font-serif font-bold text-lg text-[#1A1A1A]">Emergency Rescue</div>
              <div className="text-xs text-[#4A4A4A]">24/7 Ambulance & Crisis shelter</div>
              <a href="tel:115" className="inline-block bg-[#1A1A1A] text-white font-mono font-bold px-3 py-1 text-sm mt-1">
                Call 115
              </a>
            </div>

            <div className="bg-[#EFE8DC] border border-[#1A1A1A] p-4 space-y-2">
              <div className="text-xs font-mono font-bold text-[#B85C38]">DIGITAL RIGHTS FOUNDATION</div>
              <div className="font-serif font-bold text-lg text-[#1A1A1A]">Cyber Harassment</div>
              <div className="text-xs text-[#4A4A4A]">Online blackmail & FIA support</div>
              <a href="tel:080039393" className="inline-block bg-[#1A1A1A] text-white font-mono font-bold px-3 py-1 text-xs mt-1">
                0800-39393
              </a>
            </div>

            <div className="bg-[#EFE8DC] border border-[#1A1A1A] p-4 space-y-2">
              <div className="text-xs font-mono font-bold text-[#6B7F59]">UMANG PAKISTAN</div>
              <div className="font-serif font-bold text-lg text-[#1A1A1A]">Mental Health Helpline</div>
              <div className="text-xs text-[#4A4A4A]">24/7 Crisis emotional support</div>
              <a href="tel:03117786264" className="inline-block bg-[#1A1A1A] text-white font-mono font-bold px-3 py-1 text-xs mt-1">
                0311 7786264
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
