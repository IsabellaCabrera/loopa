import { RestaurantCard } from "../components/Cards/Restaurant";
import { NavBar } from "../components/Header/NavBar";
import { Rating } from "../components/Tags/Rating";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Tags/Checkbox";
import { FaRegClock } from "react-icons/fa";
import { PiRecycleBold } from "react-icons/pi";
import { useState } from "react";
import { ProductCard } from "../components/Cards/Product";

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
      <main className="md:px-14 relative ">
        <div className="hidden absolute left-0 bg-azul w-1/2 h-full -z-10 md:block"></div>
        <div className=" bg-[url(/RestaurantBanner.webp)] w-full h-[340px] bg-cover bg-center bg-no-repeat rounded-b-4xl relative">
          <div className=" absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 md:left-[18%] md:translate-x-0">
            <RestaurantCard img="/mclogo.webp" restaurant={null} />
          </div>
        </div>

        <section className=" flex flex-col md:flex-row gap-6  md:gap-10 lg:gap-12 justify-between mt-20 md:mt-14">
          <aside className="w-full px-6">
            <div className="md:pt-14">
              <h1 className="font-bold text-4xl ">McDonald’s – Pance</h1>
              <p> Avenida Cañas Gordas con 109 Calle 18</p>
            </div>

            <article className="bg-mainWhite rounded-2xl shadow-md p-4 my-8">
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
                  <Rating value={4.9} />
                </span>
              </div>
            </article>

            <div className="w-full h-[250px] md:h-[450px] bg-amarillo md:mb-10 rounded-4xl text-center">
              Map Coming soons
            </div>
          </aside>

          <aside className="w-full px-6 md:px-0">
            <Input
              type="search"
              name="search-food"
              placeholder="Search by food names"
            />
            <div className=" mt-4 mb-10 flex flex-wrap gap-2">
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
            <div className="pb-6 grid grid-cols-1 lg:grid-cols-2 gap-y-12 md:gap-y-6 gap-x-6 md:gap-x-12 md:max-h-[700px] overflow-auto pr-2">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};
