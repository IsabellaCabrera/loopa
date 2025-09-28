import { RestaurantCard } from "../components/Cards/Restaurant";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/Header/NavBar";
import { Rating } from "../components/Tags/Rating";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Tags/Checkbox";
import { FaRegClock } from "react-icons/fa";
import { PiRecycleBold } from "react-icons/pi";
import { useState } from "react";

const restaurant = {
  id: crypto.randomUUID(),
  img: "RestaurantBanner.webp",
};

const checkboxOptions = [
  {
    id: crypto.randomUUID(),
    label: "Fresh Food",
    img: "/public/FreshFoodIcon.webp",
  },
  {
    id: crypto.randomUUID(),
    label: "Sales",
    img: "/public/Sale.webp",
  },
  {
    id: crypto.randomUUID(),
    label: "Cupons",
    img: "/public/Cupons.webp",
  },
];

export const Restaurante = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (id: string, isChecked: boolean) => {
    setSelected((prev) =>
      isChecked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  return (
    <>
      <NavBar />
      <main className=" px-14 relative  ">
        <div className="absolute left-0 bg-azul w-1/2 h-full -z-10"></div>
        <div className=" bg-[url(/RestaurantBanner.webp)] w-full h-[340px] bg-cover bg-center bg-no-repeat rounded-4xl"></div>
        <div className=" absolute  transform -translate-x-1 translate-y-9">
          <RestaurantCard
            key={restaurant.id}
            img={restaurant.img}
            restaurant={null}
          />
        </div>

        <section className=" flex m-8 ">
          <div>
            <div className="m-8 ">
              <h1 className="font-bold text-4xl ">McDonald’s – Pance</h1>
              <p> Avenida Cañas Gordas con 109 Calle 18</p>
            </div>

            <article className="bg-mainWhite rounded-2xl shadow-md p-4 w-[472px] max-w-md m-8">
              {/* Food Waste Saved */}
              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span className="flex items-center gap-2 text-black">
                  Food Waste Saved <PiRecycleBold className="text-black" />
                </span>
                <span className="font-normal">18 portions</span>
              </div>

              {/* Delivery */}
              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span className="flex items-center gap-2 text-black">
                  Delivery <FaRegClock className="text-black" />
                </span>
                <span className="font-normal">25 min</span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between py-2">
                <span className="text-black">Rating</span>
                <span>
                  <Rating value={4.9} />{" "}
                </span>
              </div>
            </article>
            <div className="m-8 h-[561px] w-[472px]  p-4 max-w-md rounded-2xl flex items-center justify-center bg-amarillo">
              <p className="font-medium">Map Soon</p>
            </div>
          </div>
          {/* rigth info */}
          <div>
            <div className="w-[542px] my-9 mx-12 ">
              <Input
                type="search"
                placeholder="Search for restaurants, dishes..."
                name="search"
              />
            </div>
            <div className=" w-[542px] mx-12 flex justify-between flex-wrap gap-2">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
