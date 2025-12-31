import type { Product } from "../utils/types";
import ProductGridItem from "./ProductGridItem";
import ProductListItem from "./ProductListItem";
import { useAppSelector } from "../app/hooks";
import ProductGridViewSkeleton from "../ui/ProductGridViewSkeleton";
import ProductListItemSkeleton from "../ui/ProductListViewSkeleton";
const ProductsView = ({
  products,
  isFetching,
}: {
  products: Product[];
  isFetching: boolean;
}) => {
  const isGridView = useAppSelector((state) => state.productsView.isGridView);
  if (isFetching) {
    return (
      <div
        className={`pt-12 grid ${
          isGridView ? "md:grid-cols-2 lg:grid-cols-3 gap-4" : "gap-y-8"
        }`}
      >
        {products.map((_, index) => {
          return isGridView ? (
            <ProductGridViewSkeleton key={index} />
          ) : (
            <ProductListItemSkeleton key={index} />
          );
        })}
        x{" "}
      </div>
    );
  }
  return (
    <div
      className={`pt-12 grid ${
        isGridView ? "md:grid-cols-2 lg:grid-cols-3 gap-4" : "gap-y-8"
      }`}
    >
      {products.map((product) =>
        isGridView ? (
          <ProductGridItem key={product.id} {...product} />
        ) : (
          <ProductListItem key={product.id} {...product} />
        )
      )}
    </div>
  );
};
export default ProductsView;
