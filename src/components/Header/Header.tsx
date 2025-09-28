import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-mainWhite rounded-b-3xl">
      <Link to={"/"}>
        <img src="/Pera-morado.svg" alt="Loopa Logo" />
      </Link>
    </header>
  );
};
