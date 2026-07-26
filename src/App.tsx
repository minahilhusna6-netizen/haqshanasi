import React, { useState } from 'react';
import { PageNav } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ChatView } from './components/ChatView';
import { LibraryView } from './components/LibraryView';
import { ResourcesView } from './components/ResourcesView';
import { AboutView } from './components/AboutView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageNav>('home');
  const [selectedLibraryCategory, setSelectedLibraryCategory] = useState<string>('all');

  const handleNavigate = (page: PageNav) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedLibraryCategory(categoryId);
    setCurrentPage('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E8] text-[#1A1A1A] selection:bg-[#B85C38] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentPage === 'chat' && (
          <ChatView />
        )}

        {currentPage === 'library' && (
          <LibraryView
            initialCategoryId={selectedLibraryCategory}
            onNavigateToChat={() => handleNavigate('chat')}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesView />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
