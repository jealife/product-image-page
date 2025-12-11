import ProductImageGallery from "@/app/components/ui/ProductImageGallery";



export default function ProductPage() {
  return (
    // Structure de conteneur centré
    <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36">
      
      {/* Simulation de la navigation (Header et Breadcrumb) */}
      <div className="text-sm text-gray-500 mb-6">
        Clothes and shoes &gt; Shoes &gt; <span className="font-semibold text-black">Reebok</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Colonne Gauche : Galerie d'Images */}
        {/* <ProductImageGallery /> */}
        <div className="w-full md:w-1/2 lg:w-7/12">
            <h1 className="text-3xl font-light mb-1">Shoes Reebok Zig Kinetica 3</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                {/* Icônes d'étoiles simulées (utilisez une librairie comme Heroicons pour les vraies icônes) */}
                <span>⭐⭐⭐⭐⭒</span> 
                <span className="text-xs">(42 reviews)</span>
            </div>
            
            <p className="text-4xl font-bold mb-8">$199.00</p>
            
            {/* ... Ici iraient les sélections de taille/couleur et le bouton "Add to cart" ... */}
            <div className="mt-6">
                <button 
                    className="w-full bg-black cursor-pointer text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                    Add to cart
                </button>
                <p className="text-sm text-green-600 mt-2 text-center">
                    Free delivery on orders over $30.0
                </p>
            </div>
        </div>

      </div>
    </main>
  );
}