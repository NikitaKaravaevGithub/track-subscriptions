export interface SubscriptionModel {
  name: string;
  price: number;
  paymentStartedAt: string;
  nextPayment: string;
}

export interface ProfileModel {
  name: string;
  id: number;
  totalPayments: number;
  nearestPayment: string;
  subscriptions: Array<SubscriptionModel>;
}
