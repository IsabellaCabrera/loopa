import { useState } from "react";
import { NavItems } from "./NavItems";

// Esto son los links que lleva el navbar del user pero del costumer
const customerNavItems = [
  {
    id: crypto.randomUUID(),
    link: "user/",
    label: "Home",
  },
  {
    id: crypto.randomUUID(),
    link: "user/otherlink2",
    label: "Ohter Link 2",
  },
  {
    id: crypto.randomUUID(),
    link: "user/otherlink3",
    label: "Ohter Link 3",
  },
];

// Esto son los links que lleva el navbar del user pero del seller

const sellerNavItems = [
  {
    id: crypto.randomUUID(),
    link: "seller/home",
    label: "Home",
  },
  {
    id: crypto.randomUUID(),
    link: "seller/link",
    label: "Seller Link",
  },
];

export const UserNavMenu = () => {
  const [userRole] = useState<"customer" | "seller">("customer");

  return (
    <>
      {userRole === "customer"
        ? customerNavItems.map(({ id, link, label }) => (
            <NavItems key={id} link={link} label={label} />
          ))
        : sellerNavItems.map(({ id, link, label }) => (
            <NavItems key={id} link={link} label={label} />
          ))}
    </>
  );
};
