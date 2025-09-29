import { useState } from "react";
import { NavItems } from "./NavItems";

// Esto son los links que lleva el navbar del user pero del costumer
const customerNavItems = [
  {
    id: crypto.randomUUID(),
    link: "customer/home",
    label: "Home",
  },
  {
    id: crypto.randomUUID(),
    link: "customer/history&savings",
    label: "history & savings",
  },
  {
    id: crypto.randomUUID(),
    link: "customer/checkout",
    label: "Cart",
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
