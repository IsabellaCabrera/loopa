import { Link, useLocation } from "react-router";
import { LandingNavMenu } from "./LandingNavMenu";
import { useEffect, useState } from "react";
import { UserNavMenu } from "./UserNavMenu";

export const NavBar = () => {
  const [page, setPage] = useState<"landing" | "user">("landing"); // le digo al useState que solo puede ser de dos tipos landing o user

  const location = useLocation();

   useEffect(() => {
    if (location.pathname === "/") {
      setPage("landing");
    } else {
      setPage("user");
    }
  }, [location.pathname]);

  return (
    <header className="flex items-center justify-between px-10 py-3 bg-mainWhite rounded-b-3xl border-b border-blue">
      <Link to={"/"}>
        <img src="/public/Pera-morado.svg" alt="Pera Logo" />
      </Link>
      <nav>
        <ul className="flex items-center gap-2">
          {page === "user" ? <UserNavMenu /> : <LandingNavMenu />}
        </ul>
      </nav>
    </header>
  );
};
