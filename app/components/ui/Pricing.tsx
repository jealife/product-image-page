export default function Pricing() {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-5xl md:text-7xl font-bold text-white">Des tarifs simples et transparents</h2>
        <p className="mt-4 text-gray-100">Aucun engagement. Des offres claires, adaptées à chaque projet.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Starter */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-slate-500 mb-6">Pour lancer rapidement votre présence en ligne</p>
          <p className="text-3xl font-bold mb-6">90 000 FCFA</p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>✔ Site one-page (scroll fluide)</li>
            <li>✔ Design responsive personnalisé</li>
            <li>✔ Formulaire de contact</li>
            <li>✔ Présentation entreprise / services</li>
            <li>✔ SEO de base</li>
            <li>✔ Hébergement offert 1 mois</li>
            <li className="text-slate-400">✘ Nom de domaine</li>
            <li className="text-slate-400">✘ Pages multiples</li>
          </ul>
          <button className="mt-8 w-full rounded-xl bg-[#082E37] text-white py-3">Choisir Starter</button>
        </div>

        {/* Avancée */}
        <div className="bg-[#01C38D] text-white rounded-2xl shadow-lg p-8 scale-105">
          <span className="inline-block bg-white/20 text-xs px-3 py-1 rounded-full mb-4">La plus populaire</span>
          <h3 className="text-xl font-semibold mb-2">Avancée</h3>
          <p className="text-indigo-100 mb-6">Une solution complète et professionnelle</p>
          <p className="text-3xl font-bold mb-6">150 000 FCFA</p>
          <ul className="space-y-3 text-sm">
            <li>✔ 3 à 5 pages statiques</li>
            <li>✔ Design sur mesure & responsive</li>
            <li>✔ Intégration contenus fournis</li>
            <li>✔ SEO de base (toutes pages)</li>
            <li>✔ Nom de domaine inclus (1 an)</li>
            <li>✔ Hébergement offert 1 mois</li>
            <li className="text-[#D8FFF4]">✘ SEO avancé</li>
          </ul>
          <button className="mt-8 w-full rounded-xl bg-white text-[#01C38D] py-3 font-medium">Choisir Avancée</button>
        </div>

        {/* Premium */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border">
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-slate-500 mb-6">Pour les entreprises et projets ambitieux</p>
          <p className="text-3xl font-bold mb-6">À partir de 250 000 FCFA</p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>✔ 6 à 10 pages statiques</li>
            <li>✔ Design premium 100 % personnalisé</li>
            <li>✔ Galerie & formulaires avancés</li>
            <li>✔ SEO avancé</li>
            <li>✔ Nom de domaine inclus (1 an)</li>
            <li>✔ Hébergement offert 3 mois</li>
          </ul>
          <button className="mt-8 w-full rounded-xl bg-[#082E37] text-white py-3">Demander un devis</button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-slate-100">Besoin d’options supplémentaires ? Contenus, maintenance ou pages additionnelles disponibles sur devis.</p>
      </div>
    </section>
  );
}
