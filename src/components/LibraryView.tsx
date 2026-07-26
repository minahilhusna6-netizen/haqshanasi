import React, { useState, useMemo } from 'react';
import { RIGHTS_CATEGORIES, RIGHTS_ARTICLES } from '../data/legalData';
import { RightsArticle } from '../types';
import { Search, BookOpen, Scale, FileText, CheckCircle2, AlertTriangle, PhoneCall, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface LibraryViewProps {
  initialCategoryId?: string;
  onNavigateToChat?: () => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({ initialCategoryId, onNavigateToChat }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(
    RIGHTS_ARTICLES[0]?.id || null
  );

  const filteredArticles = useMemo(() => {
    return RIGHTS_ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.categoryId === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.lawCitation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keyRights.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="border-b-2 border-[#1A1A1A] pb-6 space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#B85C38] uppercase font-bold tracking-wider">
          <span>PAKISTANI STATUTORY LAWS</span>
          <span>•</span>
          <span className="font-urdu text-sm font-bold">حقوق لائبریری</span>
        </div>
        
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
          Statutory Rights Library & Legal Citations
        </h1>
        
        <p className="text-base text-[#4A4A4A] max-w-3xl leading-relaxed">
          Comprehensive, plain-language reference guides to women's constitutional, statutory, and Islamic rights under Pakistani law—complete with act numbers, court precedents, enforcement steps, and myth-busting legal facts.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B85C38]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by law name (e.g. 'MFLO 1961', 'Nikahnama Column 18', 'Khula', 'Inheritance', 'Harassment')..."
            className="w-full bg-[#FAF8F5] border-2 border-[#1A1A1A] pl-12 pr-4 py-3 text-base text-[#1A1A1A] focus:outline-none focus:border-[#B85C38] shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 font-bold text-xs uppercase tracking-wider border transition-colors shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#B85C38] text-white border-[#1A1A1A]'
                : 'bg-[#EFE8DC] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
            }`}
          >
            All Categories ({RIGHTS_ARTICLES.length})
          </button>

          {RIGHTS_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider border transition-colors shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#B85C38] text-white border-[#1A1A1A]'
                  : 'bg-[#EFE8DC] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

      </div>

      {/* Articles Stream */}
      <div className="space-y-8">
        {filteredArticles.length === 0 ? (
          <div className="bg-[#FAF8F5] border-2 border-[#1A1A1A] p-8 text-center space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">No legal articles match your query</h3>
            <p className="text-sm text-[#4A4A4A]">Try searching with broader terms or clear your search query filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#B85C38] text-white px-4 py-2 text-xs font-bold border border-[#1A1A1A]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredArticles.map((article) => {
            const isExpanded = expandedArticleId === article.id;
            return (
              <div
                key={article.id}
                className="bg-[#FAF8F5] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transition-all"
              >
                {/* Article Header Bar */}
                <div
                  onClick={() => setExpandedArticleId(isExpanded ? null : article.id)}
                  className="p-6 cursor-pointer hover:bg-[#E8EFE3]/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1A1A1A]/20"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="bg-[#B85C38] text-white font-mono text-[10px] uppercase font-bold px-2 py-0.5">
                        STATUTE ANALYSIS
                      </span>
                      {article.urduTitle && (
                        <span className="font-urdu text-sm font-bold text-[#6B7F59]">
                          {article.urduTitle}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] leading-tight">
                      {article.title}
                    </h2>

                    <div className="text-xs font-mono text-[#6B7F59] font-bold flex items-center space-x-1">
                      <FileText className="w-3.5 h-3.5 text-[#B85C38]" />
                      <span>{article.lawCitation}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 self-start md:self-center">
                    <span className="text-xs font-bold text-[#1A1A1A] underline">
                      {isExpanded ? 'Collapse Analysis' : 'Expand Full Article'}
                    </span>
                    <button className="p-2 bg-[#EFE8DC] border border-[#1A1A1A] text-[#1A1A1A]">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Always-Visible Summary */}
                <div className="px-6 py-4 bg-[#FAF8F5] text-sm text-[#4A4A4A] leading-relaxed border-b border-[#1A1A1A]/10">
                  {article.summary}
                </div>

                {/* Expanded Detailed Sections */}
                {isExpanded && (
                  <div className="p-6 space-y-8 bg-[#FAF8F5] border-t border-[#1A1A1A]">
                    
                    {/* Key Statutory Rights */}
                    <div className="space-y-3">
                      <h3 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#B85C38] pb-1 uppercase tracking-wide flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-[#B85C38]" />
                        <span>Key Statutory Rights Guaranteed to You</span>
                      </h3>
                      <div className="space-y-2">
                        {article.keyRights.map((right, rIdx) => (
                          <div key={rIdx} className="bg-[#E8EFE3] border border-[#6B7F59]/40 p-3 text-sm text-[#1A1A1A] flex items-start space-x-3">
                            <span className="font-bold text-[#B85C38] text-base">•</span>
                            <span>{right}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step by Step Action Plan */}
                    <div className="space-y-3">
                      <h3 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#6B7F59] pb-1 uppercase tracking-wide flex items-center space-x-2">
                        <Scale className="w-5 h-5 text-[#6B7F59]" />
                        <span>Step-By-Step Enforcement Procedure</span>
                      </h3>
                      <div className="space-y-2">
                        {article.stepByStepAction.map((step, sIdx) => (
                          <div key={sIdx} className="bg-[#FAF8F5] border border-[#1A1A1A] p-3 text-sm text-[#1A1A1A] flex items-start space-x-3">
                            <span className="bg-[#1A1A1A] text-white font-mono font-bold text-xs px-2 py-0.5 shrink-0 mt-0.5">
                              STEP 0{sIdx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Common Misconceptions vs Legal Facts */}
                    <div className="space-y-3">
                      <h3 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 uppercase tracking-wide flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                        <span>Common Social Myths vs Actual Legal Facts</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {article.commonMisconceptions.map((item, mIdx) => (
                          <div key={mIdx} className="border-2 border-[#1A1A1A] p-4 space-y-2 bg-[#F2E2D8]/40">
                            <div className="text-xs font-mono font-bold text-red-700 uppercase">
                              ❌ COMMON MYTH:
                            </div>
                            <p className="text-xs font-semibold text-[#1A1A1A]">"{item.claim}"</p>
                            <div className="text-xs font-mono font-bold text-green-800 uppercase pt-2 border-t border-[#1A1A1A]/20">
                              ✓ ACTUAL LEGAL FACT:
                            </div>
                            <p className="text-xs text-[#1A1A1A] leading-relaxed">{item.legalFact}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Article Footer Action Bar */}
                    <div className="pt-4 border-t border-[#1A1A1A]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                      {article.relevantHelpline && (
                        <div className="text-xs font-mono text-[#1A1A1A]">
                          <strong className="text-[#B85C38]">RECOMMENDED HELPLINE:</strong> {article.relevantHelpline}
                        </div>
                      )}

                      {onNavigateToChat && (
                        <button
                          onClick={onNavigateToChat}
                          className="bg-[#B85C38] hover:bg-[#9A4A2B] text-white px-5 py-2.5 text-xs font-bold border border-[#1A1A1A] flex items-center space-x-2 transition-colors cursor-pointer"
                        >
                          <span>Ask AI Companion About This Law</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
