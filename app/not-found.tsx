import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <main className=" flex items-center justify-center text-center py-24">
      <div className='flex flex-col items-center justify-center text-center '>
        <h1 className="text-3xl font-bold">Page introuvable</h1>
        <p className="text-gray-500 mt-2">
          Cette page n’existe pas.
        </p>
        <Image width={500} height={500} src="/404-error.png" className='w-[65%] md:w-[80%]' alt="" placeholder="blur" blurDataURL="/img/placeholder.webp" />
      </div>
    </main>
  );
}
