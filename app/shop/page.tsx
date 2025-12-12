// seo 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | BR.F – Sneakers & Chaussures tendance',
  description:
    'Découvrez notre sélection de sneakers et chaussures tendance : Nike, Adidas, Reebok, Puma et plus encore. Qualité, style et confort au rendez-vous.',

  openGraph: {
    title: 'Shop | BR.F – Sneakers & Chaussures tendance',
    description:
      'Explorez notre collection de sneakers premium pour homme, femme et enfant. Livraison rapide et styles modernes.',
    url: 'https://brf-seven.vercel.app/shop',
    siteName: 'BR.F',
    images: [
      {
        url: 'https://brf-seven.vercel.app/og/preview.avif',
        width: 1200,
        height: 630,
        alt: 'Collection de sneakers BR.F',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shop | BR.F – Sneakers & Chaussures tendance',
    description:
      'Sneakers modernes et confortables pour tous les styles. Découvrez la collection BR.F.',
    images: ['https://brf-seven.vercel.app/og/preview.avif'],
  },
};

// seo. 
import { productsData } from '../data/products';

function getAllProducts() {
  // En production, ce serait un appel à une API ou BDD
  return productsData;
}

// ------------------------------------------------------------------

import ProductCard from '../components/ui/ProductCard'; 

// Rendre la fonction de la page asynchrone pour la récupération des données
export default async function ShopPage() {
  const products = getAllProducts();

  // 👈 Ajoutez ce log pour vérifier l'intégrité des données récupérées
  console.log("Nombre d'articles récupérés:", products.length);
  console.log("Premier slug:", products[0]?.slug);

  return (
    <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">


      <h1 className="text-4xl font-light text-gray-900 mb-8 border-b pb-2">
        Collection
      </h1>

      <div className="mt-6 grid grid-cols-2 gap-x-3 md:gap-x-2. xl:gap-x-8 gap-y-4 sm:grid-cols-3 ">


        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}