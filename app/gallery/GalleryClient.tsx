"use client";
import ImageCard from '../components/ui/ImageCard';
import SearchBar from '../components/ui/SearchBar';
import { useState, useMemo } from 'react';
import type { Pictures } from '../data/images';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function GalleryClient({ products }: { products: Pictures[] }) {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const [search, setSearch] = useState(q);
  const [validated, setValidated] = useState(q);
  useEffect(() => {
    // Si l'URL change (naviguer depuis une autre page), on synchronise
    setSearch(q);
    setValidated(q);
  }, [q]);
  const filtered = useMemo(() => {
    if (!validated.trim()) return products;
    const s = validated.trim().toLowerCase();
    return products.filter(img =>
      img.title.toLowerCase().includes(s) ||
      img.tags.some(tag => tag.toLowerCase().includes(s))
    );
  }, [validated, products]);

  const router = useRouter();
  const handleValidate = () => {
    setValidated(search);
    // Met à jour l'URL pour partage ou navigation
    if (search.trim()) {
      router.push(`/gallery?q=${encodeURIComponent(search.trim())}`);
    } else {
      router.push('/gallery');
    }
  };

  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container ">
      {/* <SearchBar value={search} onInputChange={setSearch} onValidate={handleValidate} /> */}
      <div className="columns-1 md:columns-3  gap-x-6 gap-y-6">
        {filtered.length > 0 ? (
          filtered.map((image) => (
            <ImageCard key={image.id} image={image} className='mb-6' />
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-400 text-xl py-12">Aucune image trouvée.</div>
        )}
      </div>
    </main>
  );
}