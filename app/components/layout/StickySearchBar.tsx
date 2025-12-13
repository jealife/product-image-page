"use client";
import SearchBar from '../ui/SearchBar';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function StickySearchBar() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Synchronise avec ?q= si présent
  useEffect(() => {
    const q = searchParams.get('q') || '';
    setSearch(q);
  }, [searchParams]);

  // Afficher uniquement sur /gallery ou /images/[slug]
  const isGallery = pathname === '/gallery';
  const isImage = pathname.startsWith('/images/');
  if (!isGallery && !isImage) return null;

  const handleValidate = () => {
    if (search.trim()) {
      router.push(`/gallery?q=${encodeURIComponent(search.trim())}`);
    } else {
      router.push('/gallery');
    }
  };

  // Hauteur du header estimée à 64px (ajuster si besoin)
  const headerHeight = 64;

  return (
    <>
      <div
        className="left-0 w-full  px-4 "
        style={{ top: headerHeight }}
      >
        <div className="max-w-4xl mx-auto">
          <SearchBar value={search} onInputChange={setSearch} onValidate={handleValidate} />
        </div>
      </div>
      {/* Ajoute un espace pour ne pas masquer le contenu */}
      {/* <div style={{ height: headerHeight + 64 }} /> */}
    </>
  );
}
