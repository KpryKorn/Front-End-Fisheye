import { Link } from "react-router-dom";

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
      <Link to={`${photographer.id}`}>
        <img src={`/images/Photographers_Id/${photographer.portrait!}`} alt={photographer.name!} />
        <h2>{photographer.name}</h2>
      </Link>
      <p className="thumbnail-city">
        {photographer.city}, {photographer.country}
      </p>
      <p className="thumbnail-tagline">{photographer.tagline}</p>
      <p className="thumbnail-price">{photographer.price}€/jour</p>
    </article>
  );
};
