import { Link } from "react-router";
import { LandingNavMenu } from "./LandingNavMenu";
import { useState } from "react";
import { UserNavMenu } from "./UserNavMenu";

export const NavBar = () => {
  const [page] = useState<"landing" | "user">("user"); // le digo al useState que solo puede ser de dos tipos landing o user
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
