export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  descriptions: string[];
  quantity?: number;
}