import { Input } from "./Input";

export const SearchBar = () => {
  return (
    <>
      <form className="sm:w-1/2 mx-auto flex flex-col gap-3 place-items-center">
        <h2 className="text-white text-xl mb-3">Order Now!</h2>
        <div className="flex flex-col sm:flex-row sm:items-end gap-3 w-full">
          <Input
            type="search"
            name="orderNow"
            placeholder="Search for foods or restaurants  "
            className="w-full" // Ocupa todo el ancho disponible
          />
        </div>
      </form>
    </>
  );
};
