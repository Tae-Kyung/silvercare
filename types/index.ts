export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Statistic {
  id: number;
  value: number;
  suffix: string;
  label: string;
  isDecimal?: boolean;
}

export interface CustomerCase {
  id: number;
  name: string;
  age: number;
  type: string;
  before: string[];
  after: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface Certification {
  id: number;
  name: string;
  year?: string;
}

export interface Partner {
  id: number;
  name: string;
  category: string;
}

export interface Package {
  id: number;
  name: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface NavLink {
  id: string;
  label: string;
}
