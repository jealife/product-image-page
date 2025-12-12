'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  nameProduct: string;
}

export default function ImageGallery({ images, nameProduct }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleThumbnailClick = (src: string) => {
    setCurrentImage(src);
  };

  return (
    <div className="w-full  pr-0"> 
      <div className="main-image-container overflow-clip w-full h-auto bg-gray-50 p-0 mb-4 flex justify-center items-center rounded-lg shadow-lg dark:bg-gray-900">
        <Image
        width={1000}
        height={600}
          src={currentImage}
          alt={nameProduct}
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    </div>
  );
}