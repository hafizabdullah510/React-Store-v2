import { useAppSelector, useAppDispatch } from "../app/hooks";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import FormRowSelect from "../ui/FormSelectRow";
import { formatPrice } from "../utils/helpers";
import type { FilterPayload, ProductMetadata } from "../utils/types";
import {
  setFilters,
  applyFilters,
  resetFilters,
} from "../features/filters/filterSlice";
import { resetPage } from "../features/products/productsSlice";

const sortOptions = ["a-z", "z-a", "low", "high"];
const ProductForm = (metadata: ProductMetadata) => {
  const { categories, companies } = metadata;
  const dispatch = useAppDispatch();
  const { search, category, company, order, amount, shipping } = useAppSelector(
    (state) => state.filters.draft
  );
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof FilterPayload["draft"];
    let value: string | boolean = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    dispatch(setFilters({ name, value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(applyFilters());
    dispatch(resetPage());
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-8 py-4 bg-base-200 rounded-lg grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-md hover:shadow-lg transition-shadow"
    >
      <FormRow
        id="search"
        labelText="search product"
        name="search"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <FormRowSelect
        id="category"
        labelText="select category"
        name="category"
        value={category}
        options={categories}
        onChange={handleChange}
      />
      <FormRowSelect
        id="company"
        labelText="select company"
        name="company"
        value={company}
        options={companies}
        onChange={handleChange}
      />
      <FormRowSelect
        id="order"
        labelText="sort by"
        name="order"
        value={order}
        options={sortOptions}
        onChange={handleChange}
      />
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm block capitalize" htmlFor="amount">
            select price
          </label>
          <p>{formatPrice(amount)}</p>
        </div>
        <input
          id="amount"
          name="amount"
          onChange={handleChange}
          value={amount}
          min={0}
          max={100000}
          type="range"
          className="range range-primary range-sm w-full"
        />
        <div className="flex justify-between items-center">
          <span className="ml-2 text-sm font-medium">0</span>
          <span className="mr-2 text-xs font-medium">
            Max: {formatPrice("100000")}
          </span>
        </div>
      </div>
      <FormRow
        id="shipping"
        labelText="free shipping"
        name="shipping"
        type="checkbox"
        checked={shipping}
        onChange={handleChange}
      />
      <Button
        type="submit"
        text="search"
        variant="primary"
        styles="h-8 uppercase self-center"
      ></Button>
      <Button
        type="button"
        text="reset"
        variant="secondary"
        styles="h-8 uppercase self-center"
        onClick={() => {
          dispatch(resetFilters());
          dispatch(resetPage());
        }}
      ></Button>
    </form>
  );
};
export default ProductForm;
