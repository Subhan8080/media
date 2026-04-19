export interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface SubscriptionResponse {
  message: string;
  email?: string;
}

export interface Newsletter {
  email: string;
  subscribedAt: Date;
}
