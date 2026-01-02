const FormRowSkeleton = () => {
  return (
    <div className={`space-y-2`}>
      <div className="h-3 w-14 skeleton" />
      <div className="px-3 h-8 w-full rounded-lg skeleton" />
    </div>
  );
};
export default FormRowSkeleton;
