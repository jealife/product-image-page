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
          <span title='prix' className="mt-2 hidden md:group-hover:flex absolute top-4 left-6
                       bg-black/50 text-white border transition hover:bg-black/70
                       px-4 py-2 text-xs font-semibold rounded-2xl
                       border-black">
            {image.free ? 'Gratuit' : (image.price ? image.price + ' FCFA' : '—')}
          </span>
          {/* Icône desktop → paiement */}
          {showDownload && (
            image.free ? (
              <>
                <a
                  href={imageUrl}
                  download
                  className="flex md:group-hover:flex absolute top-4 right-6 bg-black/50 text-white rounded-2xl px-2 py-1 transition hover:bg-black/70 z-10"
                  style={{ display: 'flex' }}
                  title="Télécharger gratuitement"
                >
                  <i className='bx  bx-folder-down-arrow text-2xl'></i> 
                </a>
              </>
            ) : (
              <button
                onClick={() => setOpenPayment(true)}
                className="hidden md:group-hover:flex absolute top-4 right-6 bg-black/50 text-white rounded-2xl px-2 py-1 transition hover:bg-black/70"
                title="Acheter et télécharger"
              >
                <i className="bx bx-lock-keyhole text-2xl"></i>
              </button>
            )
          )}
        </article>
        <div className="w-full flex justify-between items-center">

          {/* Bouton mobile → paiement fullscreen */}
          <span title='prix' className="md:hidden mt-2
                       bg-gray-50 border text-gray-800 rounded-md
                       px-4 py-2 text-xs font-semibold
                         border-black">
            {image.free ? 'Gratuit' : (image.price ? image.price + ' FCFA' : '—')}
          </span>
          {showDownload && (
            image.free ? (
              <a
                href={imageUrl}
                download
                className="md:hidden mt-2 bg-gray-50"
              >
                <span className='border text-gray-800 rounded-md px-4 py-2 text-xs font-semibold border-black flex items-center justify-center gap-2'>
                  <i className='bx  bx-folder-down-arrow text-lg'></i> 
                  Télécharger l’image
                </span>
              </a>
            ) : (
              <button
                onClick={() => setOpenPayment(true)}
                className="md:hidden mt-2 bg-gray-50"
              >
                <span className='border text-gray-800 rounded-md px-4 py-2 text-xs font-semibold border-black flex items-center justify-center gap-2'>
                  <i className="bx bx-lock-keyhole text-lg"></i>
                  Télécharger l’image
                </span>
              </button>
            )
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
