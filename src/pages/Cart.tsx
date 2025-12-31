import FeaturedTitle from "../components/FeaturedTitle";
import { useAppSelector } from "../app/hooks";
import CartEntity from "../components/CartItem";
import { formatPrice } from "../utils/helpers";
import Button from "../ui/Button";
const Cart = () => {
  const { cartItems, subtotal, orderTotal } = useAppSelector(
    (state) => state.cart
  );
  const isCartEmpty = cartItems.length === 0;
  return (
    <div>
      <FeaturedTitle
        text={isCartEmpty ? "your cart is empty" : "shopping cart"}
      />
      {!isCartEmpty && (
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-12 mt-8">
          <div className="lg:col-span-8">
            {cartItems.map((item) => {
              const { productId, color } = item;
              return (
                <CartEntity key={`${productId}-${color}`} cartItem={item} />
              );
            })}
          </div>
          <div className="lg:col-span-4 bg-base-200 p-8 rounded-xl space-y-4 lg:self-start">
            <p className="flex text-xs justify-between items-center pb-2 border-b border-base-300 capitalize font-medium">
              subtotal<span>{formatPrice(subtotal)}</span>
            </p>
            <p className="flex text-xs justify-between items-center pb-2 border-b border-base-300 capitalize font-medium">
              shipping<span>{formatPrice(500)}</span>
            </p>
            <p className="flex text-xs justify-between items-center pb-2 border-b border-base-300 capitalize font-medium">
              tax<span>{formatPrice(1500)}</span>
            </p>
            <p className="flex text-md justify-between items-center capitalize font-semibold">
              order total<span>{formatPrice(orderTotal)}</span>
            </p>
            <Button
              type="button"
              text="checkout"
              styles="uppercase mt-8 block w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
