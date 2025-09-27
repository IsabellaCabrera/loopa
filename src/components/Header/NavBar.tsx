import { Link } from "react-router";
import { LandingNavMenu } from "./LandingNavMenu";
import { useState } from "react";
import { UserNavMenu } from "./UserNavMenu";

export const NavBar = () => {
  const [page] = useState<"landing" | "user">("landing");
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-secondary">
      <Link to={"/"}>
        <img src="/loopalogo.svg" alt="Loopa Logo" />
      </Link>
      <nav>
        <ul className="flex items-center gap-2">
          {page === "user" ? <UserNavMenu /> : <LandingNavMenu />}
        </ul>
      </nav>
    </header>
  );
};
