import type { UserRoleProps } from "../../types/userRole";

export const UserRole = ({
  value,
  name,
  id,
  title,
  description,
  img,
  onChange,
  checked,
}: UserRoleProps) => {
  return (
    <label htmlFor={id} className="cursor-pointer h-full w-full ">
      <input
        required
        className="peer sr-only"
        value={value}
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <article className="h-full px-9 py-12 ring-2 ring-tertiary rounded-md flex flex-col items-center gap-2 text-center peer-checked:ring-primary hover:border-primary hover:ring-2 hover:ring-primary hover:ring-offset-0">
        <img className="w-[200px]" src={`/${img}`} alt={name} />
        <h3 className="font-bold text-[20px]">{title}</h3>
        <p className="text-sm font-light">{description}</p>
      </article>
    </label>
  );
};
