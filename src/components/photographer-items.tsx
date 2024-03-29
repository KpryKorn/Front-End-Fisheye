import { Link } from "react-router-dom";

export interface PhotographerProps {
  photographer: {
    name: string | null;
    id: number | null;
    city: string | null;
    country: string | null;
    tagline: string | null;
    price: number | null;
    portrait: string | null;
  };
  medias?: {
    id: number;
    photographerId: number;
    title: string;
    image?: string;
    video?: string;
    likes: number;
    date: string;
    price: number;
  }[];
  likes?: number;
}

export const Thumbnail = ({ photographer }: PhotographerProps) => {
  return (
    <article role="article">
      <Link
        to={`${photographer.id}`}
        aria-label={`Lien vers le profil de ${photographer.name}`}
        role="link"
        tabIndex={0}
      >
        <img
          src={`/images/Photographers_Id/${photographer.portrait!}`}
          alt={photographer.name!}
          role="img"
          aria-label={photographer.name!}
          tabIndex={0}
        />
        <h2 tabIndex={0}>{photographer.name}</h2>
      </Link>
      <p className="thumbnail-city" role="contentinfo" tabIndex={0}>
        {photographer.city}, {photographer.country}
      </p>
      <p className="thumbnail-tagline" role="contentinfo" tabIndex={0}>
        {photographer.tagline}
      </p>
      <p className="thumbnail-price" role="contentinfo" tabIndex={0}>
        {photographer.price}€/jour
      </p>
    </article>
  );
};

export const ProfileText = ({ photographer }: PhotographerProps) => {
  return (
    <div role="contentinfo">
      <h1 className="profile-name">{photographer.name}</h1>
      <p className="profile-city">
        {photographer.city}, {photographer.country}
      </p>
      <p className="profile-tagline">{photographer.tagline}</p>
    </div>
  );
};
