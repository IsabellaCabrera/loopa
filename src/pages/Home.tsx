import { NavBar } from "../components/Header/NavBar";
import { SearchBar } from "../components/SearchBar";
import { PromosCard } from "../components/Cards/Promos";
import { RestaurantCard } from "../components/Cards/Restaurant";

const promoInfo = [
  {
    id: crypto.randomUUID(),
    restaurant: "McDonalds",
    img: "mc.webp",
    avatar: "mclogo.webp",
    promo: 50,
  },
  {
    id: crypto.randomUUID(),
    restaurant: "McDonalds",
    img: "mc.webp",
    avatar: "mclogo.webp",
    promo: 50,
  },
];

const restaurant = [
  {
    id: crypto.randomUUID(),
    img: "/public/mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "/public/mclogo.webp",
    restaurant: "McDonalds",
  },
];

export const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
            <section className="py-9 px-12">
              <h2 className="font-bold text-xl">The best promos!</h2>
              <section className="mb-8 grid grid-cols-1 sm:grid-cols-2  gap-3 mt-3">
                {promoInfo.map(({ id, img, restaurant, avatar, promo }) => (
                  <PromosCard
                    key={id}
                    img={img}
                    restaurantAvatar={avatar}
                    restuarant={restaurant}
                    promo={promo}
                  />
                ))}
              </section>
            </section>
                  <section className="py-9 px-12">
                    <h2 className="font-bold text-xl">Top 10 Picks!</h2>
                    <section className="grid grid-flow-col justify-between gap-4 mt-3 overflow-x-auto scrollbar-hide">
                      {restaurant.map(({ id, img, restaurant }) => (
                        <RestaurantCard key={id} img={img} restaurant={restaurant} />
                      ))}
                    </section>
                  </section>
    </>
  );
};
