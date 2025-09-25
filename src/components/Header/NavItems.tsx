import { Link } from "react-router";

interface NavItemsProps {
  link: string;
  label: string;
}

export const NavItems = ({ link, label }: NavItemsProps) => {
  return (
    <li>
      <Link className="px-4 py-2 font-medium hover:text-primary transition" to={`/${link}`}>
        {label}
      </Link>
    </li>
  );
};
