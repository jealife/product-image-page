import Link from 'next/link';
import type { Pictures } from '@/app/data/images';
import Image from 'next/image';

interface ImageCardProps {
    image: Pictures;
}

export default function ImageCard({ image }: ImageCardProps) {
    const { title, slug, imageUrl } = image;
    return (
        <article className="h-max mb-4 group block bg-white rounded-lg duration-300 w-full overflow-clip relative  image_card">
            <Link href={`/images/${slug}`} className="btn_product group cursor-pointer  bg-black/35 text-white font-semibold transition-colors duration-300">
                <Image width={300} height={100} aria-label={`Image de ${title}`}
                    src={imageUrl}
                    alt={`Image de ${title}`}
                    className="w-full h-auto object-cover object-center cubic  hover:duration-300" />
            </Link>
                <span className='py-1 px-2 flex items-center justify-center rounded-2xl absolute top-4 right-6 bg-black/35 text-white font-semibold   transition-colors duration-300'>
                    <p className="md:text-xs text-[10px] text-gray-100 font-medium uppercase">❤️</p>
                </span>
        </article>
    )
}
