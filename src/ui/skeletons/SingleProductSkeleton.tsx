import FormRowSkeleton from "./FormRowSkeleton";
const SingleProductSkeleton = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="h-96 w-full sm:w-96 object-cover rounded-lg lg:w-full skeleton" />
        <div>
          <div className="h-9 w-28 skeleton" />
          <div className="h-7 w-20 mt-2 skeleton" />
          <div className="h-7 w-20 mt-2 skeleton" />
          <div className="mt-4 h-30 w-full skeleton" />
          <p className="mt-2 capitalize font-medium block skeleton-text">
            colors
          </p>
          <div className="mt-2 flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="h-5 w-5 rounded-full skeleton" />
            ))}
          </div>

          <div className="mt-4 space-y-2 max-w-75">
            <FormRowSkeleton />
            <div className="h-10 w-32 mt-4 skeleton" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProductSkeleton;
