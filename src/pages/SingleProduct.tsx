import { useParams } from "react-router-dom";
import { useFetchSingleProductQuery } from "../services/api";
import { Loading } from "../components";
import ErrorElement from "../ui/ErrorElement";
import { formatPrice } from "../utils/helpers";
import Button from "../ui/Button";
import { useEffect, useMemo, useState } from "react";
import type { CartItem } from "../utils/types";
import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../app/hooks";
import FormRowSelect from "../ui/FormSelectRow";
import toast from "react-hot-toast";

const options = ["1", "2", "3", "4", "5"];
const SingleProduct = () => {
  const { id: productId } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedAmount, setSelectedAmount] = useState<number>(1);
  const { data, isError, isLoading } = useFetchSingleProductQuery(
    Number(productId)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data && data.attributes?.colors?.length && !selectedColor) {
      setSelectedColor(data.attributes.colors[0]);
    }
  }, [data]);

  const cartItem = useMemo<CartItem | null>(() => {
    if (!data || !selectedColor) return null;

    return {
      amount: selectedAmount,
      productId: Number(productId),
      title: data.attributes.title,
      image: data.attributes.image,
      color: selectedColor || data.attributes.colors[0],
      price: data.attributes.price,
      company: data.attributes.company,
    };
  }, [data, selectedColor, selectedAmount, productId]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !data) {
    return <ErrorElement />;
  }
  const { attributes } = data;
  const { title, image, colors, company, description, price } = attributes;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cartItem) return;
    dispatch(addToCart(cartItem));
    toast.success("Item added to cart");
  };
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
      <img
        src={image}
        alt={title}
        className="h-96 w-96 object-cover rounded-lg lg:w-full"
      />
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h3 className="text-xl mt-2 font-semibold">{company}</h3>
        <p className="mt-2 text-lg">{formatPrice(price)}</p>
        <p className="mt-4 leading-8">{description}</p>
        <p className="mt-2 capitalize font-medium block">colors</p>
        <div className="mt-2 flex items-center gap-2">
          {colors.map((color) => (
            <span
              key={color}
              style={{ backgroundColor: `${color}` }}
              onClick={() => setSelectedColor(color)}
              className={`h-5 w-5 rounded-full cursor-pointer ${
                color === selectedColor ? "border-2 border-primary" : ""
              }`}
            />
          ))}
        </div>
        <form className="mt-4 space-y-2 max-w-75" onSubmit={handleSubmit}>
          <FormRowSelect
            id="amount"
            labelText="amount"
            name="amount"
            onChange={(e) => setSelectedAmount(Number(e.target.value))}
            value={selectedAmount.toString()}
            options={options}
            styles="focus:ring-base-300 h-12 px-4"
          />
          <Button
            type="submit"
            variant="secondary"
            text="add to bag"
            styles="uppercase mt-4 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};
export default SingleProduct;
