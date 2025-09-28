import { LoopaCard } from "../components/Cards/Loopa";
import { PromosCard } from "../components/Cards/Promos";
import { RestaurantCard } from "../components/Cards/Restaurant";
import { OrderNowForm } from "../components/Forms/OrderNow";
import { NavBar } from "../components/Header/NavBar";

const loopaInfo = [
  {
    id: crypto.randomUUID(),
    title: "Save food by Taking care of your business",
    description: "Create a business account",
    img: "loopCardImg.webp",
  },
  {
    id: crypto.randomUUID(),
    title: "Save food by Taking care of your business",
    description: "Create a business account",
    img: "loopCardImg.webp",
  },
  {
    id: crypto.randomUUID(),
    title: "Save food by Taking care of your business",
    description: "Create a business account",
    img: "loopCardImg.webp",
  },
];

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
    img: "mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "mclogo.webp",
    restaurant: "McDonalds",
  },
  {
    id: crypto.randomUUID(),
    img: "mclogo.webp",
    restaurant: "McDonalds",
  },
];

export const Landing = () => {
  return (
    <>
      <NavBar />
      <section className="h-[440px] bg-[url(/heroimg.webp)] bg-center bg-cover bg-no-repeat" /> 
      <section className="py-9 px-12 ">
        <h2 className="font-bold text-xl">What Can you find in Loopa</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit gap-3 mt-3">
          {loopaInfo.map(({ id, title, description, img }) => (
            <LoopaCard
              key={id}
              img={img}
              title={title}
              description={description}
            />
          ))}
        </section>
      </section>
      <section className="py-9 px-12 bg-[url(/ordernow.webp)] bg-cover bg-center bg-no-repeat h-[500px] flex flex-col justify-center  ">
        <OrderNowForm />
      </section>
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
      <section className="m-9 h-[500px] rounded-2xl flex items-center justify-center bg-secondary">
        <p className="font-medium">Map Soon</p>
      </section>
    </>
  );
};
