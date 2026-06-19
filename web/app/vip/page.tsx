export default function VipPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        Adi Naamen VIP
      </h1>

      <p className="text-lg mb-6">
        Bli en del av vårt eksklusive fellesskap og få tilgang til unikt innhold, arrangementer og nettverksmuligheter.
      </p>

      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">
          Fordeler med VIP-medlemskap
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Tidlig tilgang til arrangementer</li>
          <li>Eksklusive historier og intervjuer</li>
          <li>Invitasjoner til digitale møter</li>
          <li>Tilgang til privat medlemsområde</li>
        </ul>
      </div>
    </main>
  );
}