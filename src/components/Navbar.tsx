import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { links } from "../utils/links";
import { useEffect, useState } from "react";
import { useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/AB.svg";
import { useAppSelector } from "../app/hooks";
import { useUser } from "@clerk/react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const { totalItems } = useAppSelector((state) => state.cart);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="h-16 bg-base-200">
      <div className="container-responsive flex justify-between items-center relative h-full">
        <div>
          <div className="lg:hidden hover:bg-base-300 p-2 rounded-lg duration-200 cursor-pointer text-base-content">
            <HiMenuAlt1 size={32} onClick={() => setIsOpen(true)} />
          </div>

          <Link to="/" className="hidden lg:block">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </Link>
        </div>

        <ul
          ref={menuRef}
          className={`absolute z-10 top-18 p-1 rounded-lg w-50 capitalize text-sm tracking-wide shadow-md
        lg:shadow-none lg:w-auto lg:p-0 lg:static lg:flex lg:items-center text-base-content bg-base-200
        ${isOpen ? "block" : "hidden"}`}
        >
          {links.map((link) => {
            if (link.name === "orders" && !isSignedIn) {
              return null;
            } else {
              return (
                <NavLink
                  key={link.id}
                  className={({ isActive, isPending }) =>
                    `
    block px-3 py-1 lg:px-4 lg:py-2 lg:p-0 rounded-lg cursor-pointer
    hover:bg-base-300
    ${
      isActive
        ? "bg-neutral text-neutral-content hover:bg-neutral"
        : isPending
        ? "bg-secondary"
        : ""
    }
    `
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              );
            }
          })}
        </ul>

        <div className="flex justify-center items-center gap-4">
          <ThemeToggle />
          <div className="rounded-full hover:bg-base-300 p-2 duration-200 cursor-pointer">
            <Link to="/cart" className="relative">
              <MdOutlineShoppingCart size={24} className="text-base-content" />
              <span className="absolute -top-2 -right-2 text-xs rounded-full w-6 h-4 flex items-center justify-center font-bold bg-primary text-primary-content">
                {totalItems}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
