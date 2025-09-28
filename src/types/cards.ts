import type { ComponentProps } from "react";
import { Rating } from "../components/Rating";
import { Add } from "../components/Add";

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

export interface ShoppingCardProps {
  id: string | number;
  image: string;
  title: string;
  description: string;
  add: ComponentProps<typeof Add>;
  price: number | string;
  delete: (id: string | number) => void;
}

