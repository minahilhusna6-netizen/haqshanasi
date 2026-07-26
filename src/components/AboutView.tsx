import React from 'react';
import { PageNav } from '../types';
import { Scale, ShieldCheck, Heart, BookOpen, AlertCircle, PhoneCall, ArrowRight, CheckCircle } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageNav) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b-2 border-[#1A1A1A] pb-6 space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#B85C38] uppercase tracking-wider">
          <span>ABOUT THE INITIATIVE</span>
          <span>•</span>
          <span className="font-urdu text-sm font-bold text-[#6B7F59]">ہمارے بارے میں</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
          HaqShanasi (حق شناسی): Legal Literacy & Dignity for Pakistani Women
        </h1>

        <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl">
          A dedicated AI legal rights companion designed to bridge the gap between complex Pakistani statutes and the everyday lived realities of women.
        </p>
      </div>

      {/* The Story Behind the Name */}
      <div className="bg-[#FAF8F5] border-2 border-[#1A1A1A] p-8 space-y-4 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
        <div className="text-xs font-mono uppercase font-bold text-[#B85C38]">
          ETYMOLOGY & PHILOSOPHY
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">
          What Does "HaqShanasi" Mean?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#4A4A4A] leading-relaxed">
          <p>
            The word <strong className="text-[#1A1A1A]">HaqShanasi</strong> is formed from two classical roots: <strong className="text-[#B85C38]">Haq (حق)</strong> meaning "Right, Truth, or Just Claim" and <strong className="text-[#6B7F59]">Shanasi (شناسی)</strong> meaning "Recognition, Awareness, or Deep Knowledge".
          </p>
          <p>
            Too often in Pakistan, women forfeit their lawful dower (Mahr), delegated right of divorce (Talaq-e-Tafweez), or inherited property simply because procedural legal terms are kept shrouded in ambiguity or cultural silence. <strong className="text-[#1A1A1A]">HaqShanasi</strong> restores this knowledge directly to women.
          </p>
        </div>
      </div>

      {/* How It Works (3 Pillars) */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] border-b border-[#1A1A1A]/20 pb-2">
          How HaqShanasi Empowers Women
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#E8EFE3] border-2 border-[#6B7F59] p-6 space-y-3">
            <span className="font-mono text-xs font-bold text-[#4C5B3F]">01 // STATUTORY ACCURACY</span>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">Authentic Legal Acts</h3>
            <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
              Every guide cites actual Pakistani laws including MFLO 1961, Dissolution of Marriages Act 1939, Section 498A PPC, 2010 Workplace Harassment Act, and 2020 Property Rights Act.
            </p>
          </div>

          <div className="bg-[#F2E2D8] border-2 border-[#B85C38] p-6 space-y-3">
            <span className="font-mono text-xs font-bold text-[#9A4A2B]">02 // AI ASSISTANCE</span>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">Sisterly Legal Companion</h3>
            <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
              Our AI chatbot answers questions in warm, empathetic English or Urdu—explaining Nikahnama clauses, Khula steps, and inheritance math without intimidating jargon.
            </p>
          </div>

          <div className="bg-[#EFE8DC] border-2 border-[#1A1A1A] p-6 space-y-3">
            <span className="font-mono text-xs font-bold text-[#1A1A1A]">03 // DIRECT LINKAGE</span>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">Emergency & Pro-Bono Aid</h3>
            <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
              Provides direct 24/7 helpline links (1099, 115, 1043), verified pro-bono legal aid cells (AGHS, LAS), and state Darul Aman shelter homes across Pakistan.
            </p>
          </div>
        </div>
      </div>

      {/* Official Legal Disclaimer Box */}
      <div className="bg-[#FAF8F5] border-2 border-[#B85C38] p-8 space-y-4">
        <div className="flex items-center space-x-2 text-red-700 font-mono text-xs font-bold uppercase">
          <AlertCircle className="w-5 h-5 text-[#B85C38]" />
          <span>IMPORTANT FORMAL LEGAL DISCLAIMER</span>
        </div>

        <h2 className="font-serif text-xl font-bold text-[#1A1A1A]">
          Legal Information vs. Professional Advocate Representation
        </h2>

        <div className="text-xs text-[#4A4A4A] space-y-2 leading-relaxed">
          <p>
            1. <strong>Educational Purpose:</strong> HaqShanasi is an AI-powered legal literacy platform created solely for educational and informational guidance regarding Pakistani statutory acts and Islamic jurisprudence.
          </p>
          <p>
            2. <strong>No Attorney-Client Privilege:</strong> Interacting with the AI companion or reading articles on this website does not establish a formal attorney-client relationship or replace personalized advice from an Advocate enrolled with the High Court Bar Council.
          </p>
          <p>
            3. <strong>Court Filings & Active Litigation:</strong> If you are filing a family suit for Khula, responding to court summons, filing an FIR with police, or seeking property possession, we strongly recommend retaining a licensed Advocate or contacting our listed pro-bono legal aid partners (such as AGHS Legal Aid Cell or Legal Aid Society).
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('resources')}
            className="bg-[#B85C38] hover:bg-[#9A4A2B] text-white px-4 py-2 text-xs font-bold border border-[#1A1A1A] flex items-center space-x-2 transition-colors cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect with Pro-Bono Legal Aid Advocates</span>
          </button>
        </div>
      </div>

      {/* Quick Jump Buttons */}
      <div className="pt-4 border-t border-[#1A1A1A]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('chat')}
          className="bg-[#1A1A1A] hover:bg-[#B85C38] text-white px-6 py-3 text-sm font-bold border border-[#1A1A1A] flex items-center space-x-2 transition-colors cursor-pointer"
        >
          <span>Consult AI Legal Companion</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate('library')}
          className="bg-[#EFE8DC] hover:bg-[#FAF8F5] text-[#1A1A1A] px-6 py-3 text-sm font-bold border border-[#1A1A1A] flex items-center space-x-2 transition-colors cursor-pointer"
        >
          <span>Explore Rights Library</span>
          <BookOpen className="w-4 h-4 text-[#6B7F59]" />
        </button>
      </div>

    </div>
  );
};
