import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
      <p className="text-gray-600 mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>

      <div className="space-y-4">
        <Link href="/shop">
          Retour au shop
        </Link>
        <div className="text-sm text-gray-500">ou utilisez la navigation pour trouver ce que vous cherchez.</div>
      </div>
    </main>
  );
}
