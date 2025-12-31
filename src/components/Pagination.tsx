import type { ProductMetadata } from "../utils/types";
import { useAppDispatch } from "../app/hooks";
import { setPage } from "../features/products/productsSlice";
const Pagination = ({
  pagination,
}: {
  pagination: ProductMetadata["pagination"];
}) => {
  const dispatch = useAppDispatch();
  const { page, pageCount } = pagination;
  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;
  return (
    <div className="mt-16 flex justify-end">
      <button
        className="px-2 py-1 sm:px-3 sm:py-2 sm:text-base bg-base-200 rounded-l uppercase text-sm font-medium cursor-pointer hover:bg-base-300 transition-colors disabled:cursor-not-allowed"
        disabled={isFirstPage}
        onClick={() => dispatch(setPage(page - 1))}
      >
        prev
      </button>
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          className={`px-2 py-1 sm:px-3 sm:py-2 sm:text-base bg-base-200 uppercase text-sm font-medium cursor-pointer hover:bg-base-300 transition-colors ${
            page === i + 1 ? "bg-base-300" : ""
          }`}
          onClick={() => {
            dispatch(setPage(i + 1));
          }}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-2 py-1 sm:px-3 sm:py-2 sm:text-base bg-base-200 rounded-r uppercase text-sm font-medium cursor-pointer hover:bg-base-300 transition-colors disabled:cursor-not-allowed"
        disabled={isLastPage}
        onClick={() => dispatch(setPage(page + 1))}
      >
        next
      </button>
    </div>
  );
};
export default Pagination;
