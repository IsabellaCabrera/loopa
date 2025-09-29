export type SummaryProps = {
  subtotal: number;
  selectedDonation: string;
  selectedPayment: string;
  onDonationChange: (value: string) => void;
  onPaymentChange: (value: string) => void;
  onPay: () => void;
};