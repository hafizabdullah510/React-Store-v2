import type { CartItem } from "../utils/types";
import FormRowSelect from "../ui/FormSelectRow";
import Button from "../ui/Button";
import { formatPrice } from "../utils/helpers";
import { removeCartItem, updateItemAmount } from "../features/cart/cartSlice";
import { useAppDispatch } from "../app/hooks";
const CartEntity = ({ cartItem }: { cartItem: CartItem }) => {
  const { productId, title, image, color, amount, price, company } = cartItem;
  const dispatch = useAppDispatch();
  return (
    <article className="pb-8 border-b border-base-300 mb-8 sm:flex sm:justify-between last:pb-0 last:border-b-0">
      <div className="sm:flex">
        <img
          src={image}
          alt={title}
          className="h-24 w-24 object-cover rounded-lg shrink-0 sm:h-32 sm:w-32"
        />
        <div className="mt-4 sm:mt-0 sm:ml-12 sm:w-48">
          <h3 className="capitalize font-medium">{title}</h3>
          <p className="font-medium text-sm text-accent mt-2">{company}</p>
          <p className="capitalize text-sm flex items-center gap-2 mt-4">
            color :{" "}
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: `${color}` }}
            />
          </p>
        </div>
        <div className="max-w-80 mt-4 sm:mt-0 sm:ml-16">
          <FormRowSelect
            id={`amount-${productId}-${color}`}
            labelText="amount"
            name="amount"
            options={["1", "2", "3", "4", "5"]}
            value={String(amount)}
            onChange={(e) => {
              dispatch(
                updateItemAmount({
                  productId,
                  color,
                  amount: Number(e.target.value),
                })
              );
            }}
            styles="text-sm sm:h-fit flex items-center"
          />
          <Button
            text="remove"
            type="button"
            styles="bg-transparent border-none outline-none p-0 text-primary font-normal h-fit mt-2"
            onClick={() => dispatch(removeCartItem({ productId, color }))}
          />
        </div>
      </div>
      <p className="mt-4 sm:mt-0 font-medium">{formatPrice(price)}</p>
    </article>
  );
};
export default CartEntity;
