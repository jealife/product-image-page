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
        Toute la collection
      </h1>

      <div className="mt-6 grid grid-cols-2 gap-x-3 md:gap-x-2 gap-y-4 sm:grid-cols-3 xl:gap-x-8">


        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}