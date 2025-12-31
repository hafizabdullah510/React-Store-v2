import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container-responsive py-20">
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
