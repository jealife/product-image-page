'use client';
import { imagesData } from '@/app/data/images';
import Image from 'next/image';
import React, { useState } from 'react';
import ImageCard from './ImageCard';

interface ImageGalleryProps {
  images: string[];
  nameProduct: string;
}

function getAllProducts() {
  // En production, ce serait un appel à une API ou BDD
  return imagesData;
}

// ------------------------------------------------------------------

  export default function ImageGallery({ images, nameProduct }: ImageGalleryProps) {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const products = getAllProducts();

    const handleThumbnailClick = (src: string) => {
      setCurrentImage(src);
    };

    return (
      <div className="w-full  pr-0">
        <div className="main-image-container overflow-clip w-full h-auto p-0 mb-4 flex justify-center items-center rounded-lg  dark:bg-gray-900">
          <Image
            width={1000}
            height={700}
            src={currentImage}
            alt={nameProduct}
            className="w-full max-w-5xl h-auto object-cover object-center rounded-lg"
          />
        </div>
        <div className='w-full my-9'>
          <span className=' text-2xl text-gray-900'>Image associées</span>
        </div>
        <div className="mt-6 columns-1 md:columns-3  gap-x-6 gap-y-6">
          {products.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    );
  }