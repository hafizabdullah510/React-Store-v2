import type { Product } from "../utils/types";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ProductGridItem = (product: Product) => {
  const { id, attributes } = product;
  const { title, price, image } = attributes;
  return (
    <Link
      to={`/product/${id}`}
      className="cursor-pointer p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={image}
        alt={title}
        className="rounded-xl h-64 md:h-48 w-full object-cover"
      />
      <div className="my-4 text-center">
        <h2 className="capitalize tracking-wide text-xl font-medium">
          {title}
        </h2>
        <p className="mt-2 text-secondary">{formatPrice(price)}</p>
      </div>
    </Link>
  );
};
export default ProductGridItem;
