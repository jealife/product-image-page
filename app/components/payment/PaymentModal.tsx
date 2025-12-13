'use client';

import Image from 'next/image';
import PaymentForm from './PaymentForm';
import type { Pictures } from '@/app/data/images';
import Modal from '../ui/Modal';

interface Props {
  image: Pictures;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentModal({ image, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="text-lg font-semibold mb-4">Acheter l’image</h2>
        <div className="flex gap-3 items-center mb-4">
          <Image
            src={image.imageUrl}
            alt={image.title}
            width={80}
            height={60}
            className="rounded"
          />
          <div>
            <p className="font-medium">{image.title}</p>
            <p className="text-sm text-gray-500">Prix : {image.price ? image.price + ' FCFA' : '—'}</p>
          </div>
        </div>
        <PaymentForm image={image} onSuccess={onClose} />
      </Modal>
  );
}
