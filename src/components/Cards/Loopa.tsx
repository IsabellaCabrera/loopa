interface LoopaCardProps {
  img: string;
  title: string;
  description: string;
}

export const LoopaCard = ({ img, title, description }: LoopaCardProps) => {
  return (
    <article className="flex flex-col gap-4">
      <img className="rounded-sm" src={`/${img}`} alt={title} />
      <h3 className="font-bold text-xl"> {title} </h3>
      <p className="font-medium text-primary"> {description} </p>
    </article>
  );
};
