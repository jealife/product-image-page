// data/products.js (simulé, doit exister)
import { productsData } from '../data/products';

// Fonction de récupération de tous les produits
function getAllProducts() {
    // En production, ce serait un appel à une API ou BDD
    return productsData; 
}

// ------------------------------------------------------------------

// app/shop/page.js (Composant Serveur)
import ProductCard from '../components/ui/ProductCard'; // Assurez-vous d'utiliser l'alias si configuré

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
      
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        
        
        {products.map((product) => (
          // ProductCard doit être un composant client S'il utilise des hooks/événements
          <ProductCard key={product.id} product={product} /> 
        ))}
      </div>
    </main>
  );
}