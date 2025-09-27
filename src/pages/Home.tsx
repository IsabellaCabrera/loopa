import { NavBar } from "../components/Header/NavBar";
import { PromosCard } from "../components/Cards/Promos";
import { RestaurantCard } from "../components/Cards/Restaurant";
import { InformativeCard } from "../components/Cards/Informative";
import { Input } from "../components/Input";

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

export const Home = () => {
  return (
    <>
      <NavBar />
      <section className="h-[440px] bg-[url(/herohomeimg.webp)] bg-center bg-cover bg-no-repeat" />
      <section className="my-9 mx-12">
        <Input
          type="search"
          placeholder="Search for restaurants, dishes..."
          name="search"
        />
      </section>
      {/* PromosCard */}
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
      {/* RestaurantCard */}
      <section className="py-9 px-12">
        <h2 className="font-bold text-xl">Top 10 Picks!</h2>
        <section className="grid grid-flow-col justify-between gap-4 mt-3 overflow-x-auto scrollbar-hide">
          {restaurant.map(({ id, img, restaurant }) => (
            <RestaurantCard key={id} img={img} restaurant={restaurant} />
          ))}
        </section>
      </section>
      {/* InformativeCard */}
      <section className="py-9 px-12">
        <h2 className="font-bold text-xl">Did you know?</h2>
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
    </>
  );
};
