export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  brand: string;
  imageUrl: string;
  thumbnails: string[];
}

export const productsData: Product[] = [
  {
    id: 1,
    name: 'Reebok Zig Kinetica 3',
    slug: 'zig-kinetica-3',
    price: 190.00,
    brand: 'Reebok',
    imageUrl: '/img/shoe-white-top.webp',
    thumbnails: [
      '/img/Image 1218982 1600x1600.webp',
      '/img/Image 1218985 1600x1600.webp',
      '/img/Image 1218991 1600x1600.webp',
    ]
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 22',
    slug: 'ultraboost-22',
    price: 180.00,
    brand: 'Adidas',
    imageUrl: '/img/Adidas-Ultraboost-22.avif',
    thumbnails: [
      '/img/Ultraboost 22 Noir.avif',
      '/img/Ultraboost 22 Noir (1).avif',
      '/img/Ultraboost 22 Noir détail.avif',
    ]
  },
  {
    id: 3,
    name: 'Nike Air Max 270',
    slug: 'air-max-270',
    price: 150.00,
    brand: 'Nike',
    imageUrl: '/img/Nike-Air-Max-270.avif',
    thumbnails: [
      '/img/NIKE+AIR+MAX+270.avif',
      '/img/air.avif',
      '/img/NIKE+AIR+MAX+270+(GS).avif',
    ]
  },
  {
    id: 4,
    name: 'Puma RS-X Pop',
    slug: 'rs-x-pop',
    price: 110.00,
    brand: 'Puma',
    imageUrl: '/img/Puma-RS-X-Pop.jpg',
    thumbnails: [
      // '/img/Puma-RS-X-Pop-1.jpg',
    ]
  },
  {
    id: 5,
    name: 'New Balance 550',
    slug: 'nb-550',
    price: 130.00,
    brand: 'New Balance',
    imageUrl: '/img/New-Balance-550.webp',
    thumbnails: [
      '/img/Chaussures-Unisexe-550.webp',
      '/img/Chaussures Unisexe 550.webp',
      '/img/Chaussures Unisexe 550 (1).webp',
    ]
  },
  {
    id: 6,
    name: 'Converse Chuck 70',
    slug: 'chuck-70',
    price: 85.00,
    brand: 'Converse',
    imageUrl: '/img/Converse-Chuck-70.webp',
    thumbnails: [
      '/img/Chuck-Top.webp',
      '/img/Chuck-70-SketchTop.webp',
    ]
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find(product => product.slug === slug);
}
