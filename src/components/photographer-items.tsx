interface PhotographerProps {
  photographer: {
    name: string | null;
    id: number | null;
    city: string | null;
    country: string | null;
    tagline: string | null;
    price: number | null;
    portrait: string | null;
  };
}

export const Thumbnail = ({ photographer }: PhotographerProps) => {
  return (
    <article>
      <img src={photographer.portrait!} alt={photographer.name!} />
      <h2>{photographer.name}</h2>
      <p>
        {photographer.city}, {photographer.country}
      </p>
      <p>{photographer.tagline}</p>
      <p>{photographer.price}€/jour</p>
    </article>
  );
};
