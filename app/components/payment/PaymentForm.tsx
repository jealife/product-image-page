'use client';

import { useState } from 'react';
import type { Pictures } from '@/app/data/images';
import { PaymentProvider } from '@/app/types/payment';
import { usePayment } from '@/app/hooks/usePayment';
import Image from 'next/image';

export default function PaymentForm({
  image,
  onSuccess,
}: {
  image: Pictures;
  onSuccess: () => void;
}) {
  const [provider, setProvider] = useState<PaymentProvider>('AIRTEL');
  const [phone, setPhone] = useState('');
  const { initiatePayment, loading, error } = usePayment();

  const handleSubmit = async () => {
    await initiatePayment({
      imageId: image.slug,
      provider,
      phone,
      amount: image.price,
    });

    onSuccess();
    alert('Paiement initié. Valide sur ton téléphone.');
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          className={`flex flex-col items-center border rounded p-2 w-20 transition focus:outline-none ${provider === 'AIRTEL' ? 'border-black ring-2 ring-red-600' : 'border-gray-300'}`}
          onClick={() => setProvider('AIRTEL')}
        >
          <Image src="/logos/airtel-money.png" alt="Airtel Money" className="h-12" width={48} height={48} />
          {/* <span className="text-xs font-medium">Airtel</span> */}
        </button>
        <button
          type="button"
          className={`flex flex-col items-center border rounded p-2 w-20 transition focus:outline-none ${provider === 'MOOV' ? 'border-black ring-2 ring-yellow-500' : 'border-gray-300'}`}
          onClick={() => setProvider('MOOV')}
        >
          <Image src="/logos/LOGO-MOMO.jpg" alt="Moov Money" className="h-12" width={48} height={48} />
          {/* <span className="text-xs font-medium">Moov</span> */}
        </button>
      </div>

      <input
        type="tel"
        placeholder={
          provider === 'AIRTEL'
            ? 'Numéro Airtel Money'
            : 'Numéro Moov Money'
        }
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl font-semibold"
      >
        {loading ? 'Traitement...' : 'Payer & Télécharger'}
      </button>
    </div>
  );
}
