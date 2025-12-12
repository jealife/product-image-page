import Link from 'next/link';
import type { Pictures } from '@/app/data/images';
import Image from 'next/image';

interface ImageCardProps {
    image: Pictures;
}

export default function ImageCard({ image }: ImageCardProps) {
    const { title, slug, imageUrl } = image;
    return (
        <article className="h-max mb-4 group block bg-white rounded duration-300 w-full overflow-clip relative ">
            <Link href={`/images/${slug}`} className="btn_product group cursor-pointer  bg-black/35 text-white font-semibold transition-colors duration-300">
                <Image width={300} height={100} aria-label={`Image de ${title}`}
                    src={imageUrl}
                    alt={`Image de ${title}`}
                    className="w-full h-auto md:group-hover:brightness-75 object-cover object-center cubic  hover:duration-300" />
            </Link>
                <span className='py-1 px-2  items-center justify-center hidden group-hover:flex rounded-2xl absolute top-4 right-6 bg-black/35 text-white font-semibold   transition-colors duration-300'>
                    <p className="md:text-xs text-[10px] text-gray-100 font-medium uppercase">❤️</p>
                </span>
        </article>
    )
}
