export type PlanType = 'produce' | 'care' | 'ad';

export type ProductionPlanItem = {
  tier: string;
  name: string;
  originalPrice: string;
  price: string;
  unit: string;
  desc: string;
  popular?: boolean;
  checklist: { ok: boolean, item: string }[];
}

export type ProductionPlans = {
  type: PlanType;
  sectionTitle: string;
  notice: string;
  plans: ProductionPlanItem[];
};

export type CarePlanItem = {
  tier: string;
  name: string;
  subtitle: string;
  originalPrice: string;
  price: string;
  desc: string;
  popular?: boolean;
  isTop?: boolean;
  checklist: { ok: boolean, item: string }[]
};

export type CarePalns = {
  type: PlanType;
  sectionTitle: string;
  sub: string;
  notice: string;
  plans: CarePlanItem[];
};

export type AdPlanItem = {
  name: string;
  price: string;
  theme: string;
  desc: string;
  tags: string[];
}

export type AdPlans = {
  type: PlanType;
  sectionTitle: string;
  plans: AdPlanItem[];
};