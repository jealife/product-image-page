// components/Header.js

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icônes de base pour le hamburger/fermeture (utilisez des icônes réelles comme Heroicons si vous en avez)
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
import { ReactNode } from 'react';
import StickySearchBar from './StickySearchBar';
import { Suspense } from 'react';
const SectionIcon = ({ children }: { children: ReactNode }) => (
  <span className="w-6 h-6 text-gray-700">{children}</span>
);



// Définition des liens (utilisé pour desktop et mobile)
const navItems = [
  { name: 'Shop', href: '/shop', icon: '📦' },
  { name: 'Gallery', href: '/gallery', icon: '🖼️' },
  { name: 'Pricing', href: '/pricing', icon: '🏷️' },
];

export default function Header() {
  const pathname = usePathname();
  // 1. État pour gérer l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Fonction pour fermer le menu (utile après un clic de navigation)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-2xl border-b border-gray-300 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo/Marque */}
          <Link href="/shop" className="text-2xl font-bold text-black ">
            BR.F
          </Link>

          {/* --- Navigation DESKTOP --- */}
          {/* Masqué sur mobile/tablette (< 768px), affiché sur desktop (md:flex) */}
          <nav className="hidden md:flex space-x-6 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`
                      text-gray-500 hover:text-gray-950 transition-colors font-medium
                      ${isActive ? ' text-gray-950' : ''}
                    `}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
          

          {/* Icônes Utilisateur/Panier */}
          <div className="flex items-center space-x-4">
            {/* Icônes ici... */}
          </div>

          {/* --- Bouton HAMBURGER (Mobile) --- */}
          {/* Affiché uniquement sur mobile (< 768px), masqué sur desktop (md:hidden) */}
          <button 
            className="md:hidden p-2 text-black ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <Suspense fallback={null}>
        <StickySearchBar/>
      </Suspense>
      
      {/* --- Overlay --- */}
{/* {isMenuOpen && (
  <div
    onClick={closeMenu}
    className="md:hidden fixed inset-0 bg-black/20 z-90"
  />
)} */}

      {/* --- Menu MOBILE flottant --- */}
      <div
        className={`md:hidden fixed top-16 right-4 w-[70%] max-w-sm border border-gray-300 bg-white rounded-2xl shadow-xl z-100
          transition-all duration-300 ease-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={closeMenu}>
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition">
                <div className="flex items-center gap-3">
                  <SectionIcon>{item.icon}</SectionIcon>
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                {/* <span className="text-gray-400">⌄</span> */}
              </div>
            </Link>
          ))}

          <div className="border-t border-gray-300 mt-3">
            {/* <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition">
              <SectionIcon>🌍</SectionIcon>
              <span className="font-medium text-gray-900">Français</span>
            </button> */}
          </div>

          <div className="pt-2">
            <button className="w-full bg-gray-800 py-3 rounded-xl border font-semibold text-gray-100 hover:bg-gray-50 transition">
              Envoyer une image
            </button>
          </div>
        </nav>
      </div>

    </header>
  );
}