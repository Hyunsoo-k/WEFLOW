export type PlanType = 'produce' | 'care' | 'ad';

export interface PricingItem {
  name: string;
  price: string;
  desc: string;
  tier?: string;
  originalPrice?: string;
  unit?: string;
  subtitle?: string;
  popular?: boolean;
  isTop?: boolean;
  theme?: string;
  checklist?: { ok: boolean; item: string }[];
  tags?: string[];
};

export type ProductionPlans = {
  type: PlanType;
  sectionTitle: string;
  notice: string;
  plans: PricingItem[];
};

export type CarePalns = {
  type: PlanType;
  sectionTitle: string;
  sub: string;
  notice: string;
  plans: PricingItem[];
};

export type AdPlans = {
  type: PlanType;
  sectionTitle: string;
  plans: PricingItem[];
};
