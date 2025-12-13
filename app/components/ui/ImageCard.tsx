'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import type { Pictures } from '@/app/data/images';

interface ImageCardProps {
  image: Pictures;
  showDownload?: boolean;
  className?: string;
}

export default function ImageCard({
  image,
  showDownload = true,
   className = '',
}: ImageCardProps & { className?: string }) {
  const { title, slug, imageUrl } = image;

  const sizes = [
    { label: 'Petit', size: '640 x 426', url: imageUrl },
    { label: 'Moyenne', size: '1920 x 1280', url: imageUrl },
    { label: 'Grand', size: '2400 x 1600', url: imageUrl },
    { label: 'Taille originale', size: '5184 x 3456', url: imageUrl },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(sizes[3]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
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
            width={600}
            height={400}
            className="w-full h-auto object-cover transition group-hover:brightness-75"
            priority={false}
          />
        </Link>

        {/* Icône desktop */}
        {showDownload && (
          <span className="hidden md:group-hover:flex absolute top-4 right-6 bg-black/35 text-white rounded-2xl px-2 py-1">
            <a
              href={imageUrl}
              download
              title="Télécharger l'image originale"
              className="flex items-center"
            >
              <i className="bx bx-folder-down-arrow text-2xl"></i>
            </a>
          </span>
        )}
      </article>

      {/* Bouton mobile */}
      {showDownload && (
        <div className="md:hidden w-full flex justify-end mt-2">
          <div className="flex items-center border-[1.5px] divide-x-1 divide-gray-300 border-gray-300 rounded-lg" ref={dropdownRef}>
            <a
              href={selected.url}
              download
              className="bg-gray-50 text-gray-800  rounded-l-md px-4 py-2 text-xs font-semibold shadow hover:bg-gray-300"
            >
              Télécharger
            </a>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="bg-gray-50  border-2 rounded-r-md px-4 py-2 text-xs font-semibold hover:bg-gray-200"
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <i className="bx bx-chevron-down "></i>
              </button>

              {dropdownOpen && (
                <div className="absolute z-10 right-0 mt-2 w-52 bg-white rounded-lg shadow border">
                  <ul className="py-2">
                    {sizes.map((s, idx) => {
                      const elements = [];
                      if (s.label === 'Taille originale' && idx !== 0) {
                        elements.push(
                          <li key={s.label + '-divider'}>
                            <hr className="my-1 border-gray-200" />
                          </li>
                        );
                      }
                      elements.push(
                        <li key={s.label}>
                          <button
                            className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${
                              selected.label === s.label ? 'font-bold' : ''
                            }`}
                            onClick={() => {
                              setSelected(s);
                              setDropdownOpen(false);
                            }}
                          >
                            <span className="inline-block w-24">
                              {s.label}
                            </span>
                            <span className="text-gray-400">
                              ({s.size})
                            </span>
                          </button>
                        </li>
                      );
                      return elements;
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
