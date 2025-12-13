'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { Pictures } from '@/app/data/images';
import PaymentModal from '../payment/PaymentModal';

interface ImageCardProps {
  image: Pictures;
  showDownload?: boolean;
  className?: string;
}

export default function ImageCard({
  image,
  showDownload = true,
  className = '',
}: ImageCardProps) {
  const { title, slug, imageUrl } = image;
  const [openPayment, setOpenPayment] = useState(false);

  return (
    <>
      <div className={`relative flex flex-col items-end justify-end ${className}`}>
        <article className="group block bg-white rounded w-full overflow-hidden relative">
          <Link
            href={`/images/${slug}`}
            className="block cursor-zoom-in bg-black/35"
          >
            <Image
              src={imageUrl}
              alt={`Image de ${title}`}
              title={`Image de ${title}`}
              width={300}
              height={640}
              className="w-full h-auto object-cover transition group-hover:brightness-75"
            />
          </Link>

          {/* Icône desktop → paiement */}
          {showDownload && (
            <button
              onClick={() => setOpenPayment(true)}
              className="hidden md:group-hover:flex absolute top-4 right-6
                         bg-black/50 text-white rounded-2xl px-2 py-1
                         transition hover:bg-black/70"
              title="Acheter et télécharger"
            >
              <i className="bx bx-lock-open text-2xl"></i>
            </button>
          )}
        </article>
        <div className="w-full flex justify-between items-center">

          {/* Bouton mobile → paiement fullscreen */}
          <span title='prix' className="md:hidden mt-2
                       bg-gray-50 border text-gray-800 rounded-md
                       px-4 py-2 text-xs font-semibold
                         border-black">
            {image.price ? image.price + ' FCFA' : '—'}
          </span>
          {showDownload && (
            <button
              onClick={() => setOpenPayment(true)}
              className="md:hidden mt-2 bg-gray-50"
            >
              <span className='border
                         text-gray-800 rounded-md
                       px-4 py-2 text-xs font-semibold
                         border-black'>
                Télécharger l’image
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Modal / Fullscreen paiement */}
      <PaymentModal
        image={image}
        isOpen={openPayment}
        onClose={() => setOpenPayment(false)}
      />
    </>
  );
}
