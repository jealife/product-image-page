export interface Pictures {
  id: number;
  title: string;
  slug: string;
  price: number;
  author: string;
  imageUrl: string;
  tags: string[];
  free?: boolean; // true si l'image est gratuite
}

export const imagesData: Pictures[] = [
  {
    id: 1,
    title: 'Plante verte sur fond blanc',
    slug: 'jealife1',
    price: 19000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe1.jpg',
    tags: [
      'plante',
      'nature'
    ],
    free: true
  },
  {
    id: 2,
    title: 'Fleur rose et feuilles',
    slug: 'jealife2',
    price: 18000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe2.jpg',
    tags: [
      'plante',
      'nature',
      'fleur'
    ],
    free: false
  },
  {
    id: 3,
    title: 'Fleur jaune en gros plan',
    slug: 'jealife3',
    price: 15000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe3.jpg',
    tags: [
      'plante',
      'nature',
      'fleur'
    ],
    free: false
  },
  {
    id: 4,
    title: 'Plante tropicale en pot',
    slug: 'jealife4',
    price: 11000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe4.jpg',
    tags: [
      '',
    ],
    free: false
  },
  {
    id: 5,
    title: 'Cactus sur fond pastel',
    slug: 'jealife5',
    price: 1300,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe5.jpg',
    tags: [
      '',
    ],
    free: true
  },
  {
    id: 6,
    title: 'Oiseau sur branche',
    slug: 'jealife6',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe6.jpg',
    tags: [
      'oiseau',
      'nature',
    ],
    free: false
  },
  {
    id: 7,
    title: 'Bouquet de fleurs sauvages',
    slug: 'jealife7',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe7.jpg',
    tags: [
      'plante',
      'nature',
      'fleur'
    ],
    free: false
  },
  {
    id: 8,
    title: 'Plante grasse en pot',
    slug: 'jealife8',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe8.jpg',
    tags: [
      '',
      '',
    ],
    free: false
  },
  {
    id: 9,
    title: 'Oranges sur un marché',
    slug: 'jealife9',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe9.jpg',
    tags: [
      'fruits',
      'ville',
      'marché'
    ],
    free: false
  },
  {
    id: 10,
    title: 'Rue animée de la ville',
    slug: 'jealife10',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe10.jpg',
    tags: [
      '',
      '',
    ],
    free: false
  },
  {
    id: 11,
    title: 'Moto en circulation urbaine',
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
    ],
    free: false
  },
  {
    id: 12,
    title: 'Taxi-bus à la gare',
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
    ],
    free: false
  },
  {
    id: 13,
    title: 'Bus et taxis en ville',
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
    ],
    free: false
  },
  {
    id: 14,
    title: 'Oiseau perché dans la nature',
    slug: 'jealife14',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe14.jpg',
    tags: [
      'nature',
      'oiseau',
    ],
    free: false
  },
  {
    id: 15,
    title: 'Paysage naturel verdoyant',
    slug: 'jealife15',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe15.jpg',
    tags: [
      'nature',
    ],
    free: false
  },
  {
    id:   16,
    title: 'Plantes grasses en pot',
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
    title: 'Nature luxuriante',
    slug: 'nature',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/nature.jpg',
    tags: [
      'nature',
      'oiseau',
    ],
    free: false
  },
  {
    id: 18,
    title: 'Oiseau exotique',
    slug: 'oiseau',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/oiseau.jpg',
    tags: [
      'nature',
      'oiseau',
    ],
    free: false
  },
];

export function getProductBySlug(slug: string): Pictures | undefined {
  return imagesData.find(image => image.slug === slug);
}

