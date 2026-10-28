
export type Product = {
  id: number;
  name: string;
  description: string;
  collectionId: number;
  imageUrl: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Designer Lehengas',
    description: 'Elegant lehenga designs with intricate embroidery.',
    collectionId: 1,
    imageUrl: '/images/lehenga.jpg',
  },
  {
    id: 2,
    name: 'Elegant Sarees',
    description: 'Timeless silk sarees and traditional styles.',
    collectionId: 2,
    imageUrl: '/images/saree.jpg',
  },
  {
    id: 3,
    name: 'Handwork Blouses',
    description: 'Beautiful Aari and Maggam embroidery inspiration.',
    collectionId: 3,
    imageUrl: '/images/blouse.jpg',
  },
];
