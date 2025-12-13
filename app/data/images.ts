export interface Pictures {
  id: number;
  title: string;
  slug: string;
  price: number;
  author: string;
  imageUrl: string;
  tags: string[];
}

export const imagesData: Pictures[] = [
  {
    id: 1,
    title: 'Reebok Zig Kinetica 3',
    slug: 'jealife1',
    price: 19000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe1.jpg',
    tags: [
      'plante',
      'nature'
    ]
  },
  {
    id: 2,
    title: 'Adidas Ultraboost 22',
    slug: 'jealife2',
    price: 18000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe2.jpg',
    tags: [
      'plante',
      'nature',
      'fleur'
    ]
  },
  {
    id: 3,
    title: 'Nike Air Max 270',
    slug: 'jealife3',
    price: 15000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe3.jpg',
    tags: [
      'plante',
      'nature',
      'fleur'
    ]
  },
  {
    id: 4,
    title: 'Puma RS-X Pop',
    slug: 'jealife4',
    price: 11000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe4.jpg',
    tags: [
      '',
    ]
  },
  {
    id: 5,
    title: 'New Balance 550',
    slug: 'jealife5',
    price: 1300,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe5.jpg',
    tags: [
      '',
    ]
  },
  {
    id: 6,
    title: 'Converse Chuck 70',
    slug: 'jealife6',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe6.jpg',
    tags: [
      'oiseau',
      'nature',
    ]
  },
  {
    id: 7,
    title: 'Converse Chuck 70',
    slug: 'jealife7',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe7.jpg',
    tags: [
      'plante',
      'nature',
      'fleur'
    ]
  },
  {
    id: 8,
    title: 'Converse Chuck 70',
    slug: 'jealife8',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe8.jpg',
    tags: [
      '',
      '',
    ]
  },
  {
    id: 9,
    title: 'Tropical orange',
    slug: 'jealife9',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe9.jpg',
    tags: [
      'fruits',
      'ville',
      'marché'
    ]
  },
  {
    id: 10,
    title: 'Converse Chuck 70',
    slug: 'jealife10',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe10.jpg',
    tags: [
      '',
      '',
    ]
  },
  {
    id: 11,
    title: 'Moto cycle en pleine ville',
    slug: 'jealife11',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe11.jpg',
    tags: [
      'cycle',
      'ville',
      'moto',
      'taxi',
      'transport'
    ]
  },
  {
    id: 12,
    title: 'Taxi bus gare',
    slug: 'jealife12',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe12.jpg',
    tags: [
      'bus',
      'ville',
      'vehicule',
      'taxi',
      'transport'
    ]
  },
  {
    id: 13,
    title: 'Converse Chuck 70',
    slug: 'jealife13',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe13.jpg',
    tags: [
      'bus',
      'ville',
      'vehicule',
      'taxi',
      'transport'
    ]
  },
  {
    id: 14,
    title: 'Converse Chuck 70',
    slug: 'jealife14',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe14.jpg',
    tags: [
      'nature',
      'oiseau',
    ]
  },
  {
    id: 15,
    title: 'Converse Chuck 70',
    slug: 'jealife15',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe15.jpg',
    tags: [
      'nature',
    ]
  },
  {
    id:   16,
    title: 'Converse Chuck 70',
    slug: 'jealife16',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe16.jpg',
    tags: [
      '',
      '',
    ]
  },
  {
    id: 17,
    title: 'Converse Chuck 70',
    slug: 'nature',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/nature.jpg',
    tags: [
      'nature',
      'oiseau',
    ]
  },
  {
    id: 18,
    title: 'Converse Chuck 70',
    slug: 'oiseau',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/oiseau.jpg',
    tags: [
      'nature',
      'oiseau',
    ]
  },
];

export function getProductBySlug(slug: string): Pictures | undefined {
  return imagesData.find(image => image.slug === slug);
}

