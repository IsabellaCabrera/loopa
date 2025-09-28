import type { RestaurantCardProps } from "../../types/cards";

export const RestaurantCard = ({ img, restaurant }: RestaurantCardProps) => {
  return (
    <article>
      <figure className="flex flex-col gap-3 items-center justify-center">
        <div className="rounded-full w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 overflow-hidden">
          <img 
            src={img} 
            alt={restaurant}
            className="bg-white w-full h-full object-cover border-4 border-[#F9CE69] rounded-full"
          />
        </div>
        <p className="text-white font-normal text-base">{restaurant}</p>
      </figure>
    </article>
  );
};