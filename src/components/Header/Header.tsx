import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-secondary">
      <Link to={"/"}>
        <img src="/loopalogo.svg" alt="Loopa Logo" />
      </Link>
    </header>
  );
};
