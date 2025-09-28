import type { ButtonProps } from "../types/button";


export const Buttonstroke = ({ children, secondary }: ButtonProps) => {
  const secondaryStyle = "border border-primary";

  return (
    <button className={`cursor-pointer text-nowrap px-5 py-3 rounded-md ${secondary ? secondaryStyle : 'border-primary text-black'}`}>
      {children}
    </button>
  );
};
