import React, { useState } from 'react';
import { HELPLINES_RESOURCES } from '../data/resourcesData';
import { HelplineResource } from '../types';
import { Phone, ShieldAlert, MapPin, Globe, Clock, Building, HeartHandshake, Home, AlertTriangle } from 'lucide-react';

export const ResourcesView: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'helpline' | 'legal_aid' | 'shelter'>('all');
  const [searchFilter, setSearchFilter] = useState('');

  const filteredResources = HELPLINES_RESOURCES.filter((res) => {
    const matchesCat = filterCategory === 'all' || res.category === filterCategory;
    const matchesSearch =
      searchFilter === '' ||
      res.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      res.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      res.locationScope.toLowerCase().includes(searchFilter.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Emergency Urgent Red Banner */}
      <div className="bg-[#B85C38] text-white p-6 border-2 border-[#1A1A1A] space-y-3 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-200">
          <ShieldAlert className="w-5 h-5 text-amber-300 shrink-0" />
          <span>IMMEDIATE DANGER & EMERGENCY ASSISTANCE</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              In Immediate Physical Danger? Call Police Emergency 15 or Helpline 1099.
            </h2>
            <p className="text-sm text-white/90 leading-relaxed">
              If you are facing domestic abuse, violent threats, or illegal eviction right now, contact the Ministry of Human Rights Helpline at <strong className="underline">1099</strong> or Edhi Rescue at <strong className="underline">115</strong> for instant intervention and safe shelter placement.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2">
            <a
              href="tel:1099"
              className="bg-[#1A1A1A] hover:bg-black text-white text-center py-3 px-4 font-mono font-bold text-base border border-white transition-colors"
            >
              CALL 1099 (TOLL-FREE)
            </a>
            <a
              href="tel:115"
              className="bg-white hover:bg-[#EFE8DC] text-[#1A1A1A] text-center py-2.5 px-4 font-mono font-bold text-sm border border-[#1A1A1A] transition-colors"
            >
              CALL EDHI 115
            </a>
          </div>
        </div>
      </div>

      {/* Page Title & Search */}
      <div className="space-y-4">
        <div className="border-b-2 border-[#1A1A1A] pb-4">
          <span className="text-xs font-mono uppercase font-bold text-[#6B7F59] tracking-wider">
            PAKISTAN DIRECTORY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Helplines, Pro-Bono Legal Aid & Darul Aman Safe Shelters
          </h1>
          <p className="text-sm text-[#4A4A4A] mt-1">
            Verified, nationwide contact numbers for emergency rescues, free advocate representation, cyber harassment assistance, and government shelter homes across all provinces.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider border cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#B85C38] text-white border-[#1A1A1A]'
                  : 'bg-[#EFE8DC] text-[#1A1A1A] border-[#1A1A1A]/30'
              }`}
            >
              All Resources ({HELPLINES_RESOURCES.length})
            </button>

            <button
              onClick={() => setFilterCategory('helpline')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider border cursor-pointer ${
                filterCategory === 'helpline'
                  ? 'bg-[#B85C38] text-white border-[#1A1A1A]'
                  : 'bg-[#EFE8DC] text-[#1A1A1A] border-[#1A1A1A]/30'
              }`}
            >
              24/7 Helplines
            </button>

            <button
              onClick={() => setFilterCategory('legal_aid')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider border cursor-pointer ${
                filterCategory === 'legal_aid'
                  ? 'bg-[#B85C38] text-white border-[#1A1A1A]'
                  : 'bg-[#EFE8DC] text-[#1A1A1A] border-[#1A1A1A]/30'
              }`}
            >
              Pro-Bono Legal Aid Orgs
            </button>

            <button
              onClick={() => setFilterCategory('shelter')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider border cursor-pointer ${
                filterCategory === 'shelter'
                  ? 'bg-[#B85C38] text-white border-[#1A1A1A]'
                  : 'bg-[#EFE8DC] text-[#1A1A1A] border-[#1A1A1A]/30'
              }`}
            >
              Darul Aman & Safe Shelters
            </button>
          </div>

          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search by city or organization name..."
            className="bg-[#FAF8F5] border-2 border-[#1A1A1A] px-3 py-1.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#B85C38]"
          />
        </div>
      </div>

      {/* Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => {
          const isHelpline = res.category === 'helpline';
          const isLegal = res.category === 'legal_aid';
          const isShelter = res.category === 'shelter';

          return (
            <div
              key={res.id}
              className="bg-[#FAF8F5] border-2 border-[#1A1A1A] p-6 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:border-[#B85C38] transition-colors"
            >
              <div className="space-y-3">
                {/* Category Tag */}
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-2">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 uppercase text-white ${
                      isHelpline ? 'bg-[#B85C38]' : isLegal ? 'bg-[#6B7F59]' : 'bg-[#1A1A1A]'
                    }`}
                  >
                    {isHelpline ? 'EMERGENCY HELPLINE' : isLegal ? 'LEGAL AID ORGANISATION' : 'SAFE SHELTER HOME'}
                  </span>

                  {res.urduName && (
                    <span className="font-urdu text-xs font-bold text-[#6B7F59]">
                      {res.urduName}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-snug">
                  {res.name}
                </h3>

                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  {res.description}
                </p>

                {/* Scope & Availability */}
                <div className="space-y-1 pt-2 border-t border-[#1A1A1A]/10 text-xs">
                  <div className="flex items-center space-x-2 text-[#6B7F59] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#B85C38] shrink-0" />
                    <span>{res.locationScope}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-[#4A4A4A]">
                    <Clock className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                    <span>{res.availability}</span>
                  </div>

                  {res.address && (
                    <div className="flex items-start space-x-2 text-[11px] text-[#4A4A4A] pt-1">
                      <Building className="w-3.5 h-3.5 text-[#B85C38] shrink-0 mt-0.5" />
                      <span>{res.address}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Call Buttons */}
              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${res.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full bg-[#1A1A1A] hover:bg-[#B85C38] text-white py-2.5 px-3 text-xs font-mono font-bold flex items-center justify-center space-x-2 transition-colors border border-[#1A1A1A]"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>CALL {res.phone}</span>
                </a>

                {res.website && (
                  <a
                    href={res.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#EFE8DC] hover:bg-[#FAF8F5] text-[#1A1A1A] py-1.5 px-3 text-[11px] font-mono font-semibold flex items-center justify-center space-x-1.5 border border-[#1A1A1A]/30 transition-colors"
                  >
                    <Globe className="w-3 h-3 text-[#6B7F59]" />
                    <span>Visit Official Website</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
