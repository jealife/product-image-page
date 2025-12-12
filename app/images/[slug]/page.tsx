import ImageGallery from '@/app/components/ui/ImageGallery';
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
        <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36">
            <div className="text-sm text-gray-500 mb-6">
                <Link href="/gallery" > Gallery </Link> &gt; <span className="font-semibold text-black"> {product.author}</span>
            </div>

            <div className="grid grid-cols-1  w-full">
                <ImageGallery
                    images={[product.imageUrl, ...product.tags].filter(Boolean) as string[]}
                    nameProduct={product.title}
                />
            </div>
        </main>
    );
}
