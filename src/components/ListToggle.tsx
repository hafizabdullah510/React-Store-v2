import { FaList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setGridView, setListView } from "../features/products/productsSlice";
const ListToggle = ({ productsCount }: { productsCount: number }) => {
  const isGridView = useAppSelector((state) => state.productsView.isGridView);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-8 pb-5 flex justify-between items-center border-b border-base-300">
      <h4 className="font-medium">{productsCount} products</h4>
      <div className="flex items-center gap-4">
        <button
          className={`text-xl p-2 border border-base-300 rounded-full hover:bg-base-300 transition-all cursor-pointer active:scale-95 ${
            isGridView ? "bg-primary text-primary-content hover:bg-primary" : ""
          }`}
          onClick={() => dispatch(setGridView())}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`text-xl p-2 border border-base-300 rounded-full hover:bg-base-300 transition-all cursor-pointer active:scale-95 ${
            isGridView ? "" : "bg-primary text-primary-content hover:bg-primary"
          }`}
          onClick={() => dispatch(setListView())}
        >
          <FaList />
        </button>
      </div>
    </div>
  );
};
export default ListToggle;
