import type { ButtonProps } from "../types/button";


export const Button = ({ children, secondary }: ButtonProps) => {
  const secondaryStyle = "border border-primary";

  return (
    <button className={`text-nowrap px-5 py-3 h-full rounded-md ${secondary ? secondaryStyle : 'bg-primary text-white'}`}>
      {children}
    </button>
  );
};
