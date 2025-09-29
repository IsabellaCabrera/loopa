import { SearchIcon } from "../icons/SearchIcons";
import type { InputProps } from "../types/input";

export const Input = ({ label, type, name, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 overflow-clip w-full">
      {label && <label className="font-medium" htmlFor={name}>{label}</label>}
      <div className="bg-mainWhite p-2 border border-morado/50 rounded-md flex items-center gap-2">
        {type === "search" && (
          <i>
            <SearchIcon />
          </i>
        )}
        <input
          className=" focus:outline-none flex-1 placeholder:text-black/45"
          type={type === "search" ? "text" : type}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
