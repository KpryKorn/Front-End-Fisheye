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
  <video src={`/videos/${media.video}`} controls />
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
