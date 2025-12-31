import { useRouteError } from "react-router-dom";
const ErrorElement = ({ text }: { text?: string }) => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="py-24 flex justify-center items-center">
      <h4 className="font-bold text-4xl text-center text-error">
        {text || "there was an error..."}
      </h4>
    </div>
  );
};
export default ErrorElement;
