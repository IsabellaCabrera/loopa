import type { ComponentProps } from "react";
import { Rating } from "../components/Rating";

export type LoopaCardProps = {
  img: string;
  title: string;
  description: string;
};

export type PromoCardProps = {
  restuarant: string;
  img: string;
  restaurantAvatar: string;
  promo: number;
};

export type RestaurantCardProps = {
  img: string;
  restaurant: string;
}

export type InformativeCardProps = {
  logo: string;
  text: string;
  background: string;
};

export type RestaurantNearYouCardProps = {
  img: string;
  restaurantimg: string;
  restaurant: string;
  ratingProps: ComponentProps<typeof Rating>;
  price: string;
  save: string;
};
