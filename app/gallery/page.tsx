import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JEaLiFe Pictures | Banque d’images créatives & Gabonaise',
  description:
    'JEaLiFe Pictures est une banque d’images proposant des photos authentiques, créatives et modernes pour les marques, créateurs et entreprises africaines.',

  openGraph: {
    title: 'JeaLife Pictures | Banque d’images créatives',
    description:
      'Découvrez une banque d’images unique mettant en valeur la créativité, les talents et les réalités africaines.',
    url: 'https://brf-seven.vercel.app/gallery',
    siteName: 'JEaLiFe Pictures',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1750287463646-8a7b2769e76a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 1200,
        height: 630,
        alt: 'JEaLiFe Pictures – Banque d’images créatives',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'JEaLiFe Pictures | Banque d’images créatives',
    description:
      'Une collection de photos authentiques pour vos sites web, réseaux sociaux et supports de communication.',
    images: ['https://images.unsplash.com/photo-1750287463646-8a7b2769e76a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
};



import GalleryClient from './GalleryClient';
import { imagesData } from '../data/images';
import { Suspense } from 'react';

export default function Page() {

  // Les metadata sont maintenant pris en compte car ce composant est un Server Component
  return (
    <Suspense fallback={<div className="text-center py-12">Chargement de la galerie…</div>}>
      <GalleryClient products={imagesData} />
    </Suspense>
  );
}
