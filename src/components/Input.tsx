import { SearchIcon } from "../icons/SearchIcons";
import type { InputProps } from "../types/input";



export const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div className="overflow-clip h-full w-full p-2 bg-white border border-primary rounded-md flex items-center gap-2">
      {type === "search" && (
        <i>
          <SearchIcon />
        </i>
      )}
      <input
        className="focus:outline-none flex-1"
        type={type === "search" ? "text" : type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
