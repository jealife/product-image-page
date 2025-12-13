'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  nameProduct: string;
}

export default function ProductImageGallery({ images, nameProduct }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleThumbnailClick = (src: string) => {
    setCurrentImage(src);
  };

  return (
    <div className="w-full  pr-0"> 
      {/* --- Image Principale --- */}
      <div className="main-image-container overflow-clip w-full h-[300px] md:h-[600px] bg-gray-50 p-0 mb-4 flex justify-center items-center rounded-lg shadow-lg dark:bg-gray-900">
        <Image
          src={currentImage}
          alt={nameProduct}
          className="w-full h-full object-cover object-center rounded-lg"
          width={600}
          height={600}
        />
      </div>

      {/* --- Miniatures (Thumbnails) --- */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(image)}
            className={`
              thumbnail-wrapper 
              w-24 h-24 p-1 
              flex items-center justify-center 
              border-2 rounded 
              cursor-pointer transition-all duration-200
              ${image === currentImage 
                ? 'border-black'
                : 'border-gray-200 hover:border-gray-400'
              }
            `}
          >
            <Image
              src={image}
              alt={`Vue du produit ${index + 1}`}
              className="max-w-full max-h-full object-contain"
              width={96}
              height={96}
            />
          </div>
        ))}
        {/* <div className="w-24 h-24 flex items-center justify-center border border-gray-300 bg-gray-50 text-gray-500 text-sm rounded">
          +4 more
        </div> */}
      </div>
    </div>
  );
}