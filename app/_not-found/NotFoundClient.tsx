'use client';

import { useSearchParams } from 'next/navigation';

export default function NotFoundClient() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Page introuvable</h1>
        {from && (
          <p className="text-gray-500 mt-2">
            Provenance : {from}
          </p>
        )}
      </div>
    </div>
  );
}
