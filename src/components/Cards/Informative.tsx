import type { InformativeCardProps } from "../../types/cards";

export const InformativeCard = ({
  logo,
  text,
  background,
}: InformativeCardProps) => {
  return (
    <article
      className="rounded-3xl py-5 px-3 h-[240px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-1/3">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <p className="text-3xl text-black/70">{text}</p>
      </div>
    </article>
  );
};
