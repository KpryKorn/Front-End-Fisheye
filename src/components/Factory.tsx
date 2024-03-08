import { useState } from "react";
import { playVideo } from "../lib/utils";

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

const Factory = ({ media, incrementLikes, likes }: MediaProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  if (media.image) {
    return (
      <li key={media.id} className="gallery-item">
        <div className="gallery-media-container" onClick={openLightbox}>
          <ImageComponent media={media} />
        </div>
        <div className="gallery-text">
          <p>{media.title}</p>
          <p className="likes" onClick={incrementLikes}>
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
          <div className="lightbox">
            <div className="lightbox-media-container">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeLightbox}
                className="lightbox-close"
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
              >
                <path
                  d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z"
                  fill="#911C1C"
                />
              </svg>

              <div className="lightbox-media-name-container">
                <figure className="lightbox-media">
                  <ImageComponent media={media} />
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
        <div className="gallery-media-container" onClick={openLightbox}>
          <VideoComponent media={media} />
        </div>
        <div className="gallery-text">
          <p>{media.title}</p>
          <p className="likes" onClick={incrementLikes}>
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
          <div className="lightbox">
            <div className="lightbox-media-container">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeLightbox}
                className="lightbox-close"
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

export default Factory;
