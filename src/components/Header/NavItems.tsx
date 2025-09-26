import { Link } from "react-router";
import type { NavItemProps } from "../../types/navBar";



export const NavItems = ({ link, label }: NavItemProps) => {
  return (
    <li>
      <Link className="px-4 py-2 font-medium hover:text-primary transition" to={`/${link}`}>
        {label}
      </Link>
    </li>
  );
};
