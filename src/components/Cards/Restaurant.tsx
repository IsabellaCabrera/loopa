import type { RestaurantCardProps } from "../../types/cards";

export const RestaurantCard = ({ img, restaurant }: RestaurantCardProps) => {
  return (
    <article>
      <figure className="flex flex-col gap-2 items-center justify-center">
        <div className="rounded-full w-32 h-32 overflow-hidden">
          <img 
            src={img} 
            alt={restaurant}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-primary font-medium">{restaurant}</p>
      </figure>
    </article>
  );
};
