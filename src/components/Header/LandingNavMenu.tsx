import { NavItems } from "./NavItems";

// Este contiene la cantidad de items que llevará el navmenu

// Esto son los links que lleva el navbar del landing

const LandingNavItems = [
  {
    id: crypto.randomUUID(),
    link: "login",
    label: "Login",
  },
  {
    id: crypto.randomUUID(),
    link: "signup",
    label: "Sign Up",
  },
];

export const LandingNavMenu = () => {
  return (
    <>
      {LandingNavItems.map(({ link, label, id }) => (
        <NavItems link={link} label={label} key={id} />
      ))}
    </>
  );
};
