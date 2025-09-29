import { useState } from "react";
import { NavBar } from "../components/Header/NavBar";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Tags/Checkbox";
import { InformativeCard } from "../components/Cards/Informative";
import { RestaurantCard } from "../components/Cards/Restaurant";
import { RestaurantNearYou } from "../components/Cards/RestaurantNearYou";
import { Button } from "../components/Button";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const restaurant = [
  {
    id: crypto.randomUUID(),
    img: "/mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "/kfclogo.webp",
    restaurant: "KFC",
  },
  {
    id: crypto.randomUUID(),
    img: "/elcorrallogo.webp",
    restaurant: "El Corral",
  },
  {
    id: crypto.randomUUID(),
    img: "/frisbylogo.webp",
    restaurant: "Frisby",
  },
  {
    id: crypto.randomUUID(),
    img: "/qbanologo.webp",
    restaurant: "Sandwich Qbano",
  },
];

const loopaInfo = [
  {
    id: crypto.randomUUID(),
    logo: "/Pera-morado.svg",
    text: "50% in most restaurants",
    background: "/Informativebgramen.webp",
  },
  {
    id: crypto.randomUUID(),
    logo: "/Pera-morado.svg",
    text: "50% in most restaurants",
    background: "/Informativebgtaco.webp",
  },
];

const checkboxOptions = [
  { id: "burger", label: "Burger", img: "/burger.svg" },
  { id: "treat", label: "Treat", img: "/treat.svg" },
  { id: "hotdogs", label: "Hotdogs", img: "/hotdogs.svg" },
  { id: "healthy", label: "Healthy", img: "/healthy.svg" },
  { id: "colombian", label: "Colombian", img: "/colombian.svg" },
  { id: "rolls", label: "Rolls", img: "/rolls.svg" },
  { id: "pizza", label: "Pizza", img: "/pizza.svg" },
  { id: "chicken", label: "Chicken", img: "/chicken.svg" },
  { id: "kebab", label: "Kebab", img: "/kebab.svg" },
];

const restaurantNewYouInfo = [
  {
    id: crypto.randomUUID(),
    img: "/mclogo.webp",
    restaurantimg: "/mclogo.webp",
    restaurant: "McDonalds",
    rating: 4.5,
    price: "$6.99",
    save: "$6",
  },
  {
    id: crypto.randomUUID(),
    img: "/kfclogo.webp",
    restaurantimg: "/kfclogo.webp",
    restaurant: "KFC",
    rating: 4.0,
    price: "$6.99",
    save: "$6",
  },
  {
    id: crypto.randomUUID(),
    img: "/elcorrallogo.webp",
    restaurantimg: "/elcorrallogo.webp",
    restaurant: "El Corral",
    rating: 4.8,
    price: "$6.99",
    save: "$6",
  },
  {
    id: crypto.randomUUID(),
    img: "/frisbylogo.webp",
    restaurantimg: "/frisbyrestaurant.webp",
    restaurant: "Frisby",
    rating: 4.3,
    price: "$6.99",
    save: "$6",
  },
  {
    id: crypto.randomUUID(),
    img: "/mclogo.webp",
    restaurantimg: "/mclogo.webp",
    restaurant: "McDonalds",
    rating: 4.5,
    price: "$6.99",
    save: "$6",
  },
  {
    id: crypto.randomUUID(),
    img: "/kfclogo.webp",
    restaurantimg: "/kfclogo.webp",
    restaurant: "KFC",
    rating: 4.0,
    price: "$6.99",
    save: "$6",
  },
  {
    id: crypto.randomUUID(),
    img: "/elcorrallogo.webp",
    restaurantimg: "/elcorrallogo.webp",
    restaurant: "El Corral",
    rating: 4.8,
    price: "$6.99",
    save: "$6",
  },
  {
    id: crypto.randomUUID(),
    img: "/frisbylogo.webp",
    restaurantimg: "/frisbylogo.webp",
    restaurant: "Frisby",
    rating: 4.3,
    price: "$6.99",
    save: "$6",
  },
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
        <h2 className="font-bold text-4xl text-morado pb-9">Popular food</h2>
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
        <div className="grid grid-flow-col gap-4 mt-3 overflow-x-auto scrollbar-hide">
          {restaurant.map(({ id, img, restaurant }) => (
            <RestaurantCard key={id} img={img} restaurant={restaurant} />
          ))}
          <SlArrowLeft className="absolute top-1/2 left-4 -translate-y-1/2 text-white/30 cursor-pointer w-[32px] h-[32px]" />
          <SlArrowRight className="absolute top-1/2 right-4 -translate-y-1/2 text-white/30 cursor-pointer w-[32px] h-[32px]" />
        </div>
      </section>
      {/* <RestaurantNearYouCard /> */}
      <section className="py-9 px-12">
        <h2 className="font-bold text-4xl text-morado pb-9">
          Restaurants near you!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-3">
          {restaurantNewYouInfo.map(
            ({ id, img, restaurantimg, restaurant, rating, price, save }) => (
              <RestaurantNearYou
                key={id}
                img={img}
                restaurantimg={restaurantimg}
                restaurant={restaurant}
                ratingProps={{ value: rating }}
                price={price}
                save={save}
              />
            )
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Button>See more restaurants</Button>
        </div>
      </section>
    </>
  );
};
