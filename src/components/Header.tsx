import { SignOutButton, useUser } from "@clerk/react-router";
import { Link } from "react-router";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <header className="h-8 bg-neutral text-neutral-content">
      {isSignedIn && user ? (
        <div className="container-responsive flex justify-end items-center h-full">
          <span className="text-sm capitalize">hi, {user.firstName}</span>
          <SignOutButton redirectUrl="/">
            <button className="ml-4 text-sm capitalize hover:underline cursor-pointer">
              sign out
            </button>
          </SignOutButton>
        </div>
      ) : (
        <div className="container-responsive flex justify-end items-center h-full">
          <Link to="/login" className="capitalize hover:underline">
            sign in / register
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
