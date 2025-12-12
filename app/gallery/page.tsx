function getAllProducts() {
  // En production, ce serait un appel à une API ou BDD
  return imagesData;
}

// ------------------------------------------------------------------
import ImageCard from '../components/ui/ImageCard';
import { imagesData } from '../data/images';
export default function page() {
    const products = getAllProducts();

    return (
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 container ">

            <h1 className="text-4xl font-light text-gray-900 mb-8 border-b pb-2">
                Gallery
            </h1>
            <div className="mt-6 columns-2 md:columns-3  gap-x-6 gap-y-6">
                {products.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </main>
    )
}
