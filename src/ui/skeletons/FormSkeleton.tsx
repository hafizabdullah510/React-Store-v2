import FormRowSkeleton from "./FormRowSkeleton";
const FormSkeleton = ({ numberOfFields }: { numberOfFields: number }) => {
  return (
    <div className="px-8 py-4 rounded-lg grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-lg">
      {Array.from({ length: numberOfFields }).map((_, index) => (
        <FormRowSkeleton key={index} />
      ))}
    </div>
  );
};
export default FormSkeleton;
