import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import type { AddProps } from "../types/add";

export const Add = ({ number }: AddProps) => {
  return (
    <div className="flex items-center justify-between w-20 h-8 bg-black text-white border border-gray-300 rounded-full px-2">
      <button className="p-1 hover:scale-110 transition">
        <AiOutlinePlus size={16} />
      </button>
      <span className="text-sm font-medium">{number}</span>
      <button className="p-1 hover:scale-110 transition">
        <RiSubtractFill size={16} />
      </button>
    </div>
  );
};
