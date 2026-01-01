import ProductForm from "../components/ProductForm";
import { useFetchAllProductsQuery } from "../services/api";
import { ListToggle, ProductsView, Pagination } from "../components";
import ErrorElement from "../ui/ErrorElement";
import { useAppSelector } from "../app/hooks";
import FormSkeleton from "../ui/FormSkeleton";
import ListToggleSkeleton from "../ui/ListToggleSkeleton";
import ProductGridViewSkeleton from "../ui/ProductGridViewSkeleton";
import ProductListViewSkeleton from "../ui/ProductListViewSkeleton";
const Products = () => {
  const filters = useAppSelector((state) => state.filters.applied);
  const { page, isGridView } = useAppSelector((state) => state.productsView);
  const { data, isLoading, isFetching, isError, isSuccess } =
    useFetchAllProductsQuery({ ...filters, page });
  if (isLoading) {
    return (
      <>
        <FormSkeleton numberOfFields={6} />
        <ListToggleSkeleton />
        <div
          className={`pt-12 grid ${
            isGridView ? "md:grid-cols-2 lg:grid-cols-3 gap-4" : "gap-y-8"
          }`}
        >
          {Array.from({ length: 6 }).map((_, index) => {
            return isGridView ? (
              <ProductGridViewSkeleton key={index} />
            ) : (
              <ProductListViewSkeleton key={index} />
            );
          })}
        </div>
      </>
    );
  }
  if (isError) {
    return <ErrorElement />;
  }
  if (!isSuccess && !data) {
    return null;
  }
  const { products, metadata } = data;
  return (
    <>
      <ProductForm {...metadata} />
      <ListToggle productsCount={metadata.pagination.total} />
      {products.length === 0 ? (
        <h2 className="mt-16 text-xl sm:text-2xl">
          No products found matching your search criteria.
        </h2>
      ) : (
        <>
          <ProductsView products={products} isFetching={isFetching} />
          <Pagination
            pagination={metadata.pagination}
            isFetching={isFetching}
          />
        </>
      )}
    </>
  );
};
export default Products;
