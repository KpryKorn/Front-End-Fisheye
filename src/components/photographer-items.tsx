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
    <article>
      <Link to={`${photographer.id}`}>
        <img
          src={`/images/Photographers_Id/${photographer.portrait!}`}
          alt={photographer.name!}
        />
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

export const ProfileText = ({ photographer }: PhotographerProps) => {
  return (
    <div>
      <h1 className="profile-name">{photographer.name}</h1>
      <p className="profile-city">
        {photographer.city}, {photographer.country}
      </p>
      <p className="profile-tagline">{photographer.tagline}</p>
    </div>
  );
};

export const DisplayTotalLikes = ({
  photographer,
  medias,
  likes,
}: PhotographerProps) => {
  const photographerMedias = medias?.filter(
    (media) => media.photographerId === photographer.id
  );

  const totalLikes = photographerMedias?.reduce(
    (acc: number, media) => acc + media.likes,
    0
  );

  return (
    <article className="total-likes-container">
      <p className="likes">
        {totalLikes! + likes!}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="total-likes-icon"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </p>
      <p>{`${photographer.price}€ /jour`}</p>
    </article>
  );
};
