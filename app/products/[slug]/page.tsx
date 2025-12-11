import ProductImageGallery from '@/app/components/ui/ProductImageGallery';
import { getProductBySlug, productsData } from '@/app/data/products';
import Link from 'next/link';

interface ProductPageProps {
  nameProduct: string;
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    console.log("[DEBUG] Taille tableau :", productsData.length);
    console.log("[DEBUG] Slug reçu :", slug);

    if (!slug) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">404 - URL Invalide</h1>
                <p className="mt-4">L'identifiant du produit est manquant dans l'URL.</p>
            </div>
        );
    }

    const product = getProductBySlug(slug);

    if (!product) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">404 - Article introuvable</h1>
                <p className="mt-4">L'article `{slug}` n'existe pas.</p>
            </div>
        );
    }

    return (
        <>
            {/* <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">

                <div className="w-full md:w-1/2 lg:w-7/12">
                    <h1 className="text-3xl font-light mb-1"></h1>
                    <p className="text-lg text-gray-500 mb-4">{product.brand}</p>
                    <p className="text-4xl font-bold mb-8">${product.price.toFixed(2)}</p>
                </div>
            </div> */}
            <main className="max-w-[1440px] w-full h-svh mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36">

                {/* Simulation de la navigation (Header et Breadcrumb) */}
                <div className="text-sm text-gray-500 mb-6">
                    <Link href="/shop" >Shop</Link> &gt; <span className="font-semibold text-black">{product.brand}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <ProductImageGallery
                      images={[product.imageUrl, ...product.thumbnails]}
                      nameProduct={product.name}
                    />
                    <div className="w-full md:w-1/2 lg:w-7/12">
                        <h1 className="text-3xl font-light mb-1">{product.name}</h1>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                            {/* Icônes d'étoiles simulées (utilisez une librairie comme Heroicons pour les vraies icônes) */}
                            <span>⭐⭐⭐⭐⭒</span>
                            <span className="text-xs">(42 reviews)</span>
                            <span className="text-xs">{product.brand}</span>
                        </div>

                        <p className="text-4xl font-bold mb-8">${product.price.toFixed(2)}</p>

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
        </>
    );
}
