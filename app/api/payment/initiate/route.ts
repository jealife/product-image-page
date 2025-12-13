import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { imageId, phone, provider, amount } = body;

  // 🔐 Validation basique
  if (!imageId || !phone || !provider || !amount) {
    return NextResponse.json(
      { error: 'Données invalides' },
      { status: 400 }
    );
  }

  // 👉 ICI : appel réel à l’API Mobile Money
  // ex: Airtel / Moov / Agrégateur (PayDunya, CinetPay, etc.)

  return NextResponse.json({
    success: true,
    transactionId: crypto.randomUUID(),
  });
}
