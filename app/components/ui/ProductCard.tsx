// components/ProductCard.js

import Link from 'next/link';
import type { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, slug, price, imageUrl, brand } = product;

  return (
    // <Link href={`/products/${slug}`}>
    //   <div className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
    //     {/* Image du Produit */}
    //     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7 bg-gray-100 p-4">
    //       <img
    //         src={imageUrl}
    //         alt={`Image de ${name}`}
    //         className="h-full w-full object-contain object-center group-hover:opacity-75 transition-opacity duration-300"
    //       />
    //     </div>
    //     {/* Détails du Produit */}
    //     <div className="p-4">
    //       <p className="text-xs text-gray-500 font-medium uppercase">{brand}</p>
    //       <h3 className="mt-1 text-sm font-semibold text-gray-900 truncate">{name}</h3>
    //       <p className="mt-1 text-lg font-bold text-gray-800">${price.toFixed(2)}</p>
    //     </div>
    //   </div>
    // </Link> 
    <article className="product_card md:h-[430px] h-[180px] relative group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300   w-full overflow-clip card card">
      {/* //</article><img aria-label="Nike Air Force 1" src="https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nike Air Force 1" className="image_product"> --> */}
      <img aria-label={`Image de ${name}`}
        src={imageUrl}
        alt={`Image de ${name}`}
        className="image_product" />
      <div className="card_content_product md:p-4 px-2 py-3 relative">
        <span className="product text-gray-700">
          <h3 className="product_name font-semibold text-sm md:text-lg">{name}</h3>
          <span className="price_product font-bold text-lg">${price.toFixed(2)}</span>
        </span>
        <Link href={`/products/${slug}`} className="btn_product cursor-pointer  bg-black/35 text-white font-semibold   transition-colors duration-300">
          <button >
            Buy Now
          </button>
        </Link>
        <span className='py-1 px-2 flex items-center justify-center rounded-2xl absolute top-4 left-4 bg-black/35 text-white font-semibold   transition-colors duration-300'>
          <p className="md:text-xs text-[10px] text-gray-100 font-medium uppercase">{brand}</p>
        </span>
      </div>
    </article>
  );
}