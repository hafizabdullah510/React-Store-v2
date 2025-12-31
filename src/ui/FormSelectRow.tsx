type FormSelectRowProps = {
  id: string;
  labelText: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: string[];
  styles?: string;
};
const FormRowSelect = ({
  id,
  labelText,
  name,
  onChange,
  value,
  options,
  styles,
}: FormSelectRowProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm block capitalize" htmlFor={id}>
        {labelText}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className={`appearance-none bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-[position_right_0.5rem_center] px-3 h-8 bg-base-100 w-full rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-base-300 ring-offset-2 ${styles}`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="text-xs pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          ▼
        </span>
      </div>
    </div>
  );
};
export default FormRowSelect;
