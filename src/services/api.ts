import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Product,
  ProductMetadata,
  FetchAllProductsDataType,
} from "../utils/types";
import { generateQuerySting } from "../utils/helpers";
export const api = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PRODUCTS_URL,
  }),
  endpoints: (builder) => ({
    fetchFeaturedProducts: builder.query<Product[], void>({
      query: () => "/products?featured=true",
      transformResponse: (response: { data: Product[] }) => response.data,
    }),
    fetchAllProducts: builder.query<
      { products: Product[]; metadata: ProductMetadata },
      FetchAllProductsDataType
    >({
      query: (filters) =>
        `/products${filters ? generateQuerySting(filters) : ""}`,
      transformResponse: (response: {
        data: Product[];
        meta: ProductMetadata;
      }) => ({
        products: response.data,
        metadata: response.meta,
      }),
    }),
    fetchSingleProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
      transformResponse: (response: { data: Product }) => response.data,
    }),
  }),
});

export const {
  useFetchFeaturedProductsQuery,
  useFetchAllProductsQuery,
  useFetchSingleProductQuery,
} = api;
