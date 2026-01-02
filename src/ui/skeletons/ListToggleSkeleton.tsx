const ListToggleSkeleton = () => {
  return (
    <div className="mt-8 pb-5 border-b border-base-300 flex justify-between items-center">
      <div className="skeleton w-28 h-4" />
      <div className="flex items-center gap-4 h-10 w-23 skeleton">
        <div
          className={`h-10 w-10 rounded-full skeleton
          }`}
        />
        <div
          className={`h-10 w-10 rounded-full skeleton
          }`}
        />
      </div>
    </div>
  );
};
export default ListToggleSkeleton;
