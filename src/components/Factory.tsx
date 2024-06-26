import { useContext, useState } from "react";
import { playVideo } from "../lib/utils";
import { PhotographerProps } from "./photographer-items";
import { LikesContext } from "./LikesContext";

interface MediaProps {
  media: {
    id: number;
    photographerId: number;
    title: string;
    image?: string;
    video?: string;
    likes: number;
    date: string;
    price: number;
  };
  incrementLikes?: () => void;
  likes?: number;
  changeMedia?: (direction: "next" | "prev") => void;
  currentMedia?: any;
  setCurrentMedia?: any;
}

const ImageComponent = ({ media }: MediaProps) => (
  <img src={`/images/${media.image}`} alt={media.title} />
);

const VideoComponent = ({ media }: MediaProps) => (
  <div className="play-btn-container">
    <video src={`/videos/${media.video}`} title={media.title} />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="play-btn"
      onClick={playVideo}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  </div>
);

export const Factory = ({
  media,
  changeMedia,
  currentMedia,
  setCurrentMedia,
}: MediaProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [likes, setLikes] = useState(media.likes);
  const [isLiked, setIsLiked] = useState(false);
  const { incrementTotalLikes, decrementTotalLikes } = useContext(LikesContext);

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  };

  const openLightbox = (media: MediaProps) => {
    window.addEventListener("keydown", handleKeyDown);
    setCurrentMedia(media);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    window.removeEventListener("keydown", handleKeyDown);
    setLightboxOpen(false);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
      decrementTotalLikes();
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
      incrementTotalLikes();
    }
  };

  if (media.image) {
    return (
      <li key={media.id} className="gallery-item">
        <div
          className="gallery-media-container"
          role="button"
          aria-label="Ouvrir la lightbox"
          // @ts-expect-error necessary for the onClick event
          onClick={() => openLightbox(media)}
          tabIndex={0}
        >
          <ImageComponent media={media} />
        </div>
        <div className="gallery-text">
          <p aria-label="Titre de la photo" tabIndex={0}>
            {media.title}
          </p>
          <p
            className="likes"
            onClick={handleLike}
            aria-label="Aimer cette image"
            role="button"
            tabIndex={0}
          >
            {likes}{" "}
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
        </div>
        {lightboxOpen && (
          <div className="lightbox" role="dialog" aria-modal="true">
            <div className="lightbox-media-container">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeLightbox}
                className="lightbox-close"
                aria-label="Fermer la lightbox"
                tabIndex={0}
              >
                <path
                  d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
                  fill="#911C1C"
                />
              </svg>
              <svg
                width="30"
                height="48"
                viewBox="0 0 30 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lightbox-prev"
                aria-label="Photo précédente"
                tabIndex={0}
                onClick={() => changeMedia!("prev")}
              >
                <path
                  d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z"
                  fill="#911C1C"
                />
              </svg>

              <div className="lightbox-media-name-container">
                <figure className="lightbox-media">
                  {currentMedia.image ? (
                    <ImageComponent media={currentMedia} />
                  ) : (
                    <VideoComponent media={currentMedia} />
                  )}
                  <figcaption className="lightbox-media-name">
                    {currentMedia.title}
                  </figcaption>
                </figure>
              </div>
              <svg
                width="30"
                height="48"
                viewBox="0 0 30 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Photo suivante"
                tabIndex={0}
                className="lightbox-next"
                onClick={() => changeMedia!("next")}
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z"
                  fill="#911C1C"
                />
              </svg>
            </div>
          </div>
        )}
      </li>
    );
  }
  if (media.video) {
    return (
      <li key={media.id} className="gallery-item">
        <div
          className="gallery-media-container"
          role="button"
          aria-label="Ouvrir la lightbox"
          tabIndex={0}
          // @ts-expect-error necessary for the onClick event
          onClick={() => openLightbox(media)}
        >
          <VideoComponent media={media} />
        </div>
        <div className="gallery-text">
          <p aria-label="Titre de la vidéo" tabIndex={0}>
            {media.title}
          </p>
          <p
            className="likes"
            onClick={handleLike}
            role="button"
            aria-label="Aimer cette vidéo"
            tabIndex={0}
          >
            {likes}{" "}
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
        </div>
        {lightboxOpen && (
          <div className="lightbox" role="dialog" aria-modal="true">
            <div className="lightbox-media-container">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeLightbox}
                className="lightbox-close"
                aria-label="Fermer la lightbox"
                tabIndex={0}
              >
                <path
                  d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
                  fill="#911C1C"
                />
              </svg>
              <svg
                width="30"
                height="48"
                viewBox="0 0 30 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lightbox-prev"
                aria-label="Naviguer vers la vidéo précédente"
                tabIndex={0}
              >
                <path
                  d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z"
                  fill="#911C1C"
                />
              </svg>

              <div className="lightbox-media-name-container">
                <figure className="lightbox-media">
                  <VideoComponent media={media} />
                  <figcaption className="lightbox-media-name">
                    {media.title}
                  </figcaption>
                </figure>
              </div>
              <svg
                width="30"
                height="48"
                viewBox="0 0 30 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lightbox-next"
                aria-label="Naviguer vers la vidéo suivante"
                tabIndex={0}
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z"
                  fill="#911C1C"
                />
              </svg>
            </div>
          </div>
        )}
      </li>
    );
  }
};

export const DisplayTotalLikes = ({ photographer }: PhotographerProps) => {
  const { totalLikes } = useContext(LikesContext);

  return (
    <article className="total-likes-container">
      <p className="likes">
        {totalLikes}{" "}
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
