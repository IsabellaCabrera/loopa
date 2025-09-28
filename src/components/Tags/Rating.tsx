import type { RatingProps } from "../../types/rating";
import { FaStar } from "react-icons/fa";

export const Rating = ({ value }: RatingProps) => {
  return (
    <div className="flex items-center gap-1 bg-[#EABF754D] px-2 py-1 rounded-full">
      <FaStar className="text-[#F9CE69]" size={16} />
      <span className="text-gray-800 text-sm font-medium">{value}</span>
    </div>
  );
};