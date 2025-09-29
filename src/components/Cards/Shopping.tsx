import type { ShoppingCardProps } from "../../types/cards";
import { Add } from "../Add";
import { Delete } from "../Delete";

export const ShoppingCard = ({
  id,
  image,
  title,
  description,
  add,
  price,
  delete: onDelete,
}: ShoppingCardProps) => {
  return (
    <article className="flex items-center gap-4 bg-Darkgray400/10 rounded-3xl p-4 w-full">
      {/* Imagen */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-28 h-28 object-cover rounded-2xl bg-secondary"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm leading-snug">{description}</p>
      </div>

      {/* Controles */}
      <div className="flex items-center gap-4">
        <Add {...add} />
        <span className="font-semibold text-gray-800 whitespace-nowrap">
          ${price.toLocaleString()}
        </span>
        <Delete id={id} onDelete={onDelete} />
      </div>
    </article>
  );
};