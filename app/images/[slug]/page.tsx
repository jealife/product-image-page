import ProductImageGallery from '@/app/components/ui/ProductImageGallery';
import { getProductBySlug, imagesData } from '@/app/data/images';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ImagesPageProps {
    nameProduct: string;
}

export default async function ImagesPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {

    const { slug } = await params;

    console.log("[DEBUG] Taille tableau :", imagesData.length);
    console.log("[DEBUG] Slug reçu :", slug);

    if (!slug) {
        notFound();
    }

    const product = getProductBySlug(slug);

    if (!product) notFound();

    return (
        <main className="max-w-[1440px] w-full h-svh mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36">
            <div className="text-sm text-gray-500 mb-6">
                <Link href="/shop" >Shop</Link> &gt; <span className="font-semibold text-black">{product.author}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <ProductImageGallery
                    images={[product.imageUrl, ...product.tags].filter(Boolean) as string[]}
                    nameProduct={product.title}
                />
                <div className="w-full md:w-xl ">
                    <h1 className="text-3xl font-light mb-1">{product.title}</h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                        {/* Icônes d'étoiles simulées (utilisez une librairie comme Heroicons pour les vraies icônes) */}
                        <span>⭐⭐⭐⭐</span>
                        <span className="text-xs">(42 reviews)</span>
                        <span className="text-xs">{product.author}</span>
                    </div>

                    <p className="text-4xl font-bold mb-8">${product.price.toFixed(2)}</p>

                    {/* ... Ici iraient les sélections de taille/couleur et le bouton "Add to cart" ... */}
                    <div className="mt-6 w-full">

                        <Link href={'/'}><button
                            className="w-full bg-black cursor-pointer text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Buy now
                        </button>
                        </Link>
                        <p className="text-sm text-green-600 mt-2 text-center">
                            Free delivery on orders over $30.0
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}
