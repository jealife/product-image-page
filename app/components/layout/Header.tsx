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


// Définition des liens
const navItems = [
  { name: 'Shop', href: '/shop' },
  { name: 'Gallery', href: '/gallery' },
  // { name: 'Men', href: '/men' },
  // { name: 'Kids', href: '/kids' },
];

export default function Header() {
  const pathname = usePathname();
  // 1. État pour gérer l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Fonction pour fermer le menu (utile après un clic de navigation)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/50 backdrop-blur-2xl border-b border-gray-300 sticky top-0 z-20 ">
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
      
      {/* --- Menu MOBILE Déroulant --- */}
      {/* Affiché si isMenuOpen est true, masqué si md:hidden (pour ne pas apparaître sur desktop) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <span
                    onClick={closeMenu} // 👈 Fermer le menu après la navigation
                    className={`
                        block px-3 py-2 rounded-md text-base font-medium transition-colors
                        ${isActive 
                            ? 'bg-gray-100 text-black' // Style actif sur mobile
                            : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                        }
                    `}
                >
                    {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}