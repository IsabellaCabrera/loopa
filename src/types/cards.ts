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
  restaurant: string | null
}

export type RestaurantInfoCardProps = {
  foodWastSaved: number;
  deliveryTime: number;
  rating: number;
};