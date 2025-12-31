import { Link } from "react-router-dom";
import type { BreadCrumbItem } from "../utils/types";

const BreadCrumbs = ({ crumbItems }: { crumbItems: BreadCrumbItem[] }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {crumbItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="capitalize">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BreadCrumbs;
