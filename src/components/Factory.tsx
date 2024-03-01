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
  if (media.image) {
    return (
      <li key={media.id} className="gallery-item">
        <ImageComponent media={media} />
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
      </li>
    );
  }
  if (media.video) {
    return (
      <li key={media.id} className="gallery-item">
        <VideoComponent media={media} />
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
      </li>
    );
  }
};

export default Factory;
