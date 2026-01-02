import FeaturedTitle from "./FeaturedTitle";
import ProductItem from "./ProductGridItem";
import { useFetchFeaturedProductsQuery } from "../services/api";
import ProductGridViewSkeleton from "../ui/skeletons/ProductGridViewSkeleton";
import ErrorElement from "../ui/ErrorElement";
import FeaturedTitleSkeleton from "../ui/skeletons/FeaturedTitleSkeleton";
const Featured = () => {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useFetchFeaturedProductsQuery();
  if (isLoading) {
    return (
      <div className="pt-20">
        <FeaturedTitleSkeleton text="featured products" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductGridViewSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return <ErrorElement />;
  }
  return (
    <div className="pt-20">
      <FeaturedTitle text="featured products" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
export default Featured;
