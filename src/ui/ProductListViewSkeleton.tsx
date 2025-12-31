const ProductListViewSkeleton = () => {
  return (
    <div className="p-8 rounded-xl sm:flex sm:justify-between shadow-lg">
      <div className="sm:flex">
        <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg skeleton" />
        <div className="mt-4 sm:mt-0 sm:ml-12">
          <div className="h-4 w-28 skeleton" />
          <div className="mt-2 w-14 h-3 skeleton" />
        </div>
      </div>
      <div className="mt-4 sm:mt-0 h-4 w-14 skeleton" />
    </div>
  );
};
export default ProductListViewSkeleton;
