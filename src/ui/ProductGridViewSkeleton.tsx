const ProductGridViewSkeleton = () => {
  return (
    <div className="p-4 rounded-xl shadow-lg">
      <div className="rounded-xl h-64 md:h-48 w-full skeleton" />
      <div className="my-4 w-full">
        <div className="w-28 skeleton h-4 mx-auto" />
        <div className="mt-2 h-3 w-14 skeleton mx-auto" />
      </div>
    </div>
  );
};
export default ProductGridViewSkeleton;
