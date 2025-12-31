export type Navlink = {
  id: number;
  name: string;
  path: string;
};

export type ProductAttributes = {
  title: string;
  company: "all" | "Artifex" | "Luxora" | "Comfora" | "Modenza" | "Homestead";
  price: string;
  image: string;
  colors: string[];
  description: string;
  shipping: boolean;
  featured: boolean;
};

export type Product = {
  id: number;
  attributes: ProductAttributes;
};

export type ThemeState = {
  mode: "light" | "dark";
  name: "corporate" | "dim";
};

export type FilterPayload = {
  draft: {
    search: string;
    company: "all" | "Artifex" | "Luxora" | "Comfora" | "Modenza" | "Homestead";
    category: "all" | "Beds" | "Sofas" | "Chairs" | "Tables" | "Kids";
    order: "a-z" | "z-a" | "low" | "high";
    amount: string;
    shipping: boolean;
  };
};

export type AppliedFilterState = Partial<FilterPayload["draft"]> | null;

export type FilterState = FilterPayload & {
  applied: AppliedFilterState;
};

export type ProductMetadata = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
  categories: string[];
  companies: string[];
};

export type FetchAllProductsDataType = AppliedFilterState & {
  page?: number;
};

export type CartItem = {
  title: string;
  image: string;
  price: string;
  productId: number;
  color: string;
  amount: number;
  company: string;
};
