export type PaymentProvider = 'AIRTEL' | 'MOOV';

export interface PaymentPayload {
  imageId: string;
  phone: string;
  provider: PaymentProvider;
  amount: number;
}
