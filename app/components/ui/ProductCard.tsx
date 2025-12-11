// components/ProductCard.js

import Link from 'next/link';
import type { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, slug, price, imageUrl, brand } = product;

  return (
    <Link href={`/products/${slug}`}>
      <div className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
        {/* Image du Produit */}
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7 bg-gray-100 p-4">
          <img
            src={imageUrl}
            alt={`Image de ${name}`}
            className="h-full w-full object-contain object-center group-hover:opacity-75 transition-opacity duration-300"
          />
        </div>
        {/* Détails du Produit */}
        <div className="p-4">
          <p className="text-xs text-gray-500 font-medium uppercase">{brand}</p>
          <h3 className="mt-1 text-sm font-semibold text-gray-900 truncate">{name}</h3>
          <p className="mt-1 text-lg font-bold text-gray-800">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}