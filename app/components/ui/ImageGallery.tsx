'use client';
import { imagesData, getProductBySlug } from '@/app/data/images';
import Image from 'next/image';
import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Loader from './loader';

interface ImageGalleryProps {
  images: string[];
  nameProduct: string;
  slug?: string;

}

function getAllProducts() {
  // En production, ce serait un appel à une API ou BDD
  return imagesData;
}

// ------------------------------------------------------------------

export default function ImageGallery({ images, nameProduct, slug }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const products = getAllProducts();

  // Récupérer le produit courant pour afficher les tags
  const currentProduct = slug ? getProductBySlug(slug) : null;
  const tags = currentProduct?.tags?.filter(tag => tag.trim() !== '') || [];

  const handleThumbnailClick = (src: string) => {
    setCurrentImage(src);
    setIsLoading(true);
    setIsPortrait(null);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    const img = e.currentTarget;
    if (img && img.naturalWidth && img.naturalHeight) {
      setIsPortrait(img.naturalHeight > img.naturalWidth);
    }
  };

  return (
    <div className="w-full pr-0">
      <div className="main-image-container overflow-clip w-full h-auto mb-4 flex justify-center items-center rounded-lg dark:bg-gray-900 relative ">
        {isLoading && <div className="absolute inset-0 flex items-center justify-center"><Loader /></div>}
        <Image
          quality={80}
          width={5000}
          height={1000}
          src={currentImage}
          alt={nameProduct}
          title='Zoom sur cette image'
          onLoad={handleImageLoad}
          priority
          placeholder="blur"
          blurDataURL="/img/placeholder-blur.png"
          sizes="(max-width: 768px) 100vw, 900px"
          className={
            `hover:cursor-zoom-in object-center rounded-lg ` +
            (isPortrait === null
              ? 'opacity-0'
              : isPortrait
                ? 'h-[60dvh] w-auto max-h-[60dvh] mx-auto'
                : 'w-full h-auto')
          }
          style={isPortrait === null ? { visibility: 'hidden' } : {}}
          onClick={(e) => {
            // Zoom uniquement sur desktop
            if (window.innerWidth >= 768) setIsZoomed(true);
          }}
        />
        {/* Overlay zoom desktop */}
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-auto"
            style={{ width: '100vw', height: '100vh' }}
          >
            <div className="flex items-center justify-center min-w-full min-h-full">
              <Image
                src={currentImage}
                alt={nameProduct}
                width={5000}
                height={3500}
                className="cursor-zoom-out"
                priority
                onClick={() => setIsZoomed(false)}
                style={{ display: 'block' }}
              />
            </div>
          </div>
        )}
      </div>

      {tags.length > 0 && (
        <div className='w-full my-6 p-4 bg-gray-100 rounded-lg'>
          <h3 className='text-sm font-semibold text-gray-700 mb-3'>Tags</h3>
          <ul className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <li key={index} className='bg-white px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-300 hover:border-gray-500 transition-colors'>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='w-full my-9'>
        <span className=' text-2xl text-gray-900'>Images associées</span>
      </div>
      <div className="columns-2 md:columns-3 gap-x-3">
        {currentProduct && products
          .filter(img => img.id !== currentProduct.id && img.tags.some(tag => currentProduct.tags.includes(tag) && tag.trim() !== ''))
          .map((image) => (
            <ImageCard key={image.id} image={image} showDownload={false} className='mb-3'  />
          ))}
      </div>
    </div>
  );
}