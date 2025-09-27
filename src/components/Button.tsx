import type { ButtonProps } from "../types/button";


export const Button = ({ children, secondary }: ButtonProps) => {
  const secondaryStyle = "border border-primary";

  return (
    <button className={`cursor-pointer text-nowrap px-5 py-3 rounded-md ${secondary ? secondaryStyle : 'bg-primary text-white'}`}>
      {children}
    </button>
  );
};
