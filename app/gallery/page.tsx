// SEO 
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

// SEO

function getAllProducts() {
  // En production, ce serait un appel à une API ou BDD
  return imagesData;
}

// ------------------------------------------------------------------
import ImageCard from '../components/ui/ImageCard';
import { imagesData } from '../data/images';
export default function page() {
    const products = getAllProducts();

    return (
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 container ">

            <h1 className="text-4xl font-light text-gray-900 mb-8 border-b pb-2">
                Galerie
            </h1>
            <div className="mt-6 columns-1 md:columns-3  gap-x-6 gap-y-6">
                {products.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </main>
    )
}
