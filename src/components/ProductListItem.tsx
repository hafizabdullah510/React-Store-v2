import type { Product } from "../utils/types";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ProductListItem = (product: Product) => {
  const { id, attributes } = product;
  const { title, price, image, company } = attributes;
  return (
    <Link
      to={`/product/${id}`}
      className="group cursor-pointer p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow sm:flex sm:justify-between"
    >
      <div className="sm:flex">
        <img
          src={image}
          alt={title}
          className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-lg group-hover:scale-105 transition-transform"
        />
        <div className="mt-4 sm:mt-0 sm:ml-12">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-accent">{company}</p>
        </div>
      </div>
      <p className="mt-4 sm:mt-0 text-lg text-secondary font-semibold">
        {formatPrice(price)}
      </p>
    </Link>
  );
};
export default ProductListItem;
