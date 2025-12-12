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
      '',
      '',
      '',
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
      ''
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
      '',
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
      '',
      '',
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
      '',
      '',
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
    title: 'Converse Chuck 70',
    slug: 'jealife9',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe9.jpg',
    tags: [
      '',
      '',
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
    title: 'Converse Chuck 70',
    slug: 'jealife11',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe11.jpg',
    tags: [
      '',
      '',
    ]
  },
  {
    id: 12,
    title: 'Converse Chuck 70',
    slug: 'jealife12',
    price: 3000,
    author: 'JEaLiFe Pictures',
    imageUrl: '/pictures/JEaLiFe12.jpg',
    tags: [
      '',
      '',
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
      '',
      '',
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
      '',
      '',
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
      '',
      '',
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
      '',
      '',
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
      '',
      '',
    ]
  },
];

export function getProductBySlug(slug: string): Pictures | undefined {
  return imagesData.find(image => image.slug === slug);
}

