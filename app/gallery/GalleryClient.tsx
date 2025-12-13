"use client";
import ImageCard from '../components/ui/ImageCard';
import SearchBar from '../components/ui/SearchBar';
import { useState, useMemo } from 'react';
import type { Pictures } from '../data/images';

export default function GalleryClient({ products }: { products: Pictures[] }) {
  const [search, setSearch] = useState('');
  const [validated, setValidated] = useState('');
  const filtered = useMemo(() => {
    if (!validated.trim()) return products;
    const s = validated.trim().toLowerCase();
    return products.filter(img =>
      img.title.toLowerCase().includes(s) ||
      img.tags.some(tag => tag.toLowerCase().includes(s))
    );
  }, [validated, products]);

  const handleValidate = () => setValidated(search);

  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container ">
      <SearchBar value={search} onInputChange={setSearch} onValidate={handleValidate} />
      <div className="mt-6 columns-1 md:columns-3  gap-x-6 gap-y-6">
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