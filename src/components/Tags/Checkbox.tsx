import type { CheckboxProps } from "../../types/button";

export const Checkbox = ({
  id,
  label,
  checked,
  img,
  onChange,
}: CheckboxProps) => {
  return (
    <button
      id={id}
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
        ${checked ? "bg-[#F9CE69] text-black" : "bg-[#F2F2F2] text-black"}`}
    >
      {img && <img src={img} alt={label} className="w-5 h-5" />}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};