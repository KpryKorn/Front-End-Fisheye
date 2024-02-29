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

const Factory = ({ media }: MediaProps) => {
  if (media.image) {
    return (
      <li key={media.id} className="gallery-item">
        <ImageComponent media={media} />
        <div className="gallery-text">
          <p>{media.title}</p>
          <p>{media.likes} ❤️</p>
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
          <p>{media.likes} ❤️</p>
        </div>
      </li>
    );
  }
};

export default Factory;
