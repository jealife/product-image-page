import ImageGallery from '@/app/components/ui/ImageGallery';
import { getProductBySlug, imagesData } from '@/app/data/images';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const image = getProductBySlug(slug);

  if (!image) {
    return {
      title: 'Image introuvable | JeaLife Pictures',
    };
  }

  return {
    title: `${image.title} | JEaLiFe Pictures`,
    description: image.title,
    openGraph: {
      images: [
        {
          url: `https://brf-seven.vercel.app/${image.imageUrl}`,
        },
      ],
    },
  };
}


export default async function ImagesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log('[DEBUG] Taille tableau :', imagesData.length);
  console.log('[DEBUG] Slug reçu :', slug);

  if (!slug) {
    notFound();
  }

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36">
      <div className="grid grid-cols-1 w-full">
        <ImageGallery
          images={[product.imageUrl]}
          nameProduct={product.title}
          slug={slug}
        />
      </div>
    </main>
  );
}
