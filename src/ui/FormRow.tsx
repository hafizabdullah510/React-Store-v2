type FormRowProps = {
  id: string;
  labelText: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: string;
  checked?: boolean;
};
const FormRow = ({
  id,
  labelText,
  name,
  onChange,
  value,
  type,
  checked,
}: FormRowProps) => {
  return (
    <div className={`space-y-2 ${type === "checkbox" ? "text-center" : ""}`}>
      <label className="text-sm block capitalize" htmlFor={id}>
        {labelText}
      </label>
      {type === "checkbox" ? (
        <input
          id={id}
          name={name}
          onChange={onChange}
          type={type}
          checked={!!checked} // always boolean
          className="checkbox checkbox-primary"
        />
      ) : (
        <input
          id={id}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          className="px-3 h-8 bg-base-100 w-full rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-base-300 ring-offset-2"
        />
      )}
    </div>
  );
};
export default FormRow;
