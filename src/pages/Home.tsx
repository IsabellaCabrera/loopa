import { useState } from "react";

import { NavBar } from "../components/Header/NavBar";
import { RestaurantCard } from "../components/Cards/Restaurant";
import { InformativeCard } from "../components/Cards/Informative";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Checkbox";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const restaurant = [
  {
    id: crypto.randomUUID(),
    img: "/public/mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/kfclogo.webp",
    restaurant: "KFC",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/elcorrallogo.webp",
    restaurant: "El Corral",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/frisbylogo.webp",
    restaurant: "Frisby",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/qbanologo.webp",
    restaurant: "Sandwich Qbano",
  },
];

const loopaInfo = [
  {
    id: crypto.randomUUID(),
    logo: "/loopalogo.svg",
    text: "50% in most restaurants",
    background: "/Informativebgramen.webp",
  },
  {
    id: crypto.randomUUID(),
    logo: "/loopalogo.svg",
    text: "50% in most restaurants",
    background: "/Informativebgtaco.webp",
  },
];

const checkboxOptions = [
  { id: "burger", label: "Burger", img: "/public/burger.svg" },
  { id: "treat", label: "Treat", img: "/public/treat.svg" },
  { id: "hotdogs", label: "Hotdogs", img: "/public/hotdogs.svg" },
  { id: "healthy", label: "Healthy", img: "/public/healthy.svg" },
  { id: "colombian", label: "Colombian", img: "/public/colombian.svg" },
  { id: "rolls", label: "Rolls", img: "/public/rolls.svg" },
  { id: "pizza", label: "Pizza", img: "/public/pizza.svg" },
  { id: "chicken", label: "Chicken", img: "/public/chicken.svg" },
  { id: "kebab", label: "Kebab", img: "/public/kebab.svg" },
];

export const Home = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (id: string, isChecked: boolean) => {
    setSelected((prev) =>
      isChecked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  return (
    <>
      <NavBar />
      <section className="h-[440px] bg-[url(/herohomeimg.webp)] bg-center bg-cover bg-no-repeat" />
      {/* Search Input */}
      <section className="my-9 mx-12">
        <Input
          type="search"
          placeholder="Search for restaurants, dishes..."
          name="search"
        />
      </section>
      {/* Checkbox */}
      <section className="mx-12 flex justify-between flex-wrap gap-2">
        {checkboxOptions.map(({ id, label, img }) => (
          <Checkbox
            key={id}
            id={id}
            label={label}
            img={img}
            checked={selected.includes(id)}
            onChange={(isChecked) => handleChange(id, isChecked)}
          />
        ))}
      </section>

      {/* InformativeCard */}
      <section className="py-9 px-12">
        <h2 className="font-bold text-4xl text-[#4741A6] pb-9">Popular food</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          {loopaInfo.map(({ id, logo, text, background }) => (
            <InformativeCard
              key={id}
              logo={logo}
              text={text}
              background={background}
            />
          ))}
        </section>
      </section>
      {/* RestaurantCard */}
      <section className="py-9 px-12 bg-black rounded-tl-3xl rounded-br-3xl relative">
        <h2 className="font-bold text-xl text-white">Top picks</h2>
        <section className="grid grid-flow-col gap-4 mt-3 overflow-x-auto scrollbar-hide">
          {restaurant.map(({ id, img, restaurant }) => (
            <RestaurantCard key={id} img={img} restaurant={restaurant} />
          ))}
          <SlArrowLeft className="absolute top-1/2 left-4 -translate-y-1/2 text-white/30 cursor-pointer w-[32px] h-[32px]" />
          <SlArrowRight className="absolute top-1/2 right-4 -translate-y-1/2 text-white/30 cursor-pointer w-[32px] h-[32px]" />
        </section>
      </section>
    </>
  );
};
