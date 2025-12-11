// components/FilterableProductGrid.js

"use client";

import { useState } from 'react';
import ProductCard from './ProductCard'; 
import type { Product } from '@/app/data/products';

interface FilterableProductGridProps {
  initialProducts: Product[];
}

export default function FilterableProductGrid({ initialProducts }: FilterableProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price-desc' | 'price-asc' | 'name-asc'>('price-desc');
  
  // 1. Filtrage
  const filteredProducts = initialProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // 2. Tri
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div>
      {/* --- Barre de Filtrage et Tri (UI Client) --- */}
      <div className="flex justify-between items-center mb-6">
        <label htmlFor="search" className="sr-only">Rechercher un article</label>
        <input
          id="search"
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-1/3"
        />
        <label htmlFor="sort" className="sr-only">Trier par</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as typeof sortBy)}
          className="border p-2 rounded-md"
        >
          <option value="price-desc">Prix: Décroissant</option>
          <option value="price-asc">Prix: Croissant</option>
          <option value="name-asc">Nom: A-Z</option>
        </select>
      </div>

      {/* --- Grille de Produits (Mise à jour après Filtrage/Tri) --- */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}