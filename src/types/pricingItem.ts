export type CheckItem = {
  ok: boolean;
  item: string;
};

export type PricingItem = {
  tier: string;
  name: string;
  originalPrice: string;
  price: string;
  unit: string;
  description: string;
  checklist: CheckItem[];
};