const Button = ({
  text,
  variant,
  styles,
  type = "button",
  onClick,
}: {
  text: string;
  variant?: string;
  styles?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant || "primary"} ${styles || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
