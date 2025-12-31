const FeaturedTitleSkeleton = ({ text }: { text: string }) => {
  return (
    <div className="pb-5 border-b-2 border-b-base-300">
      <h2 className="skeleton skeleton-text text-3xl tracking-wider font-medium capitalize">
        {text}
      </h2>
    </div>
  );
};
export default FeaturedTitleSkeleton;
