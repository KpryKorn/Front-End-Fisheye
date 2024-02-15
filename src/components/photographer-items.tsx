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
      <img src={`/images/Photographers_Id/${photographer.portrait!}`} alt={photographer.name!} />
      <h2>{photographer.name}</h2>
      <p className="thumbnail-city">
        {photographer.city}, {photographer.country}
      </p>
      <p className="thumbnail-tagline">{photographer.tagline}</p>
      <p className="thumbnail-price">{photographer.price}€/jour</p>
    </article>
  );
};
