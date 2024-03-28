import { Link } from "react-router-dom";
import data from "../data/photographers.json";
import fisheyeLogo from "/images/logo.png";
import { ProfileText } from "../components/photographer-items";
import { PrimaryBtn, Dropdown } from "../components/buttons";
import { DisplayTotalLikes, Factory } from "../components/Factory";
import { useState } from "react";
import Modal from "../components/Modal";
import { LikesContext } from "../components/LikesContext";

const Photographer = () => {
  const URLId = window.location.pathname.split("/")[1];

  // comparer ID de l'URL avec ID du photographe à afficher dynamiquement
  const photographerToRender = data.photographers.find(
    (photographer) => photographer.id.toString() === URLId.toString()
  );

  const medias = data.media;

  const [sortMethod, setSortMethod] = useState("Popularité");
  const sortedMedias = medias.sort((a, b) => {
    if (sortMethod === "Popularité") {
      return b.likes - a.likes;
    } else if (sortMethod === "Date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortMethod === "Titre") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const photographerMedias = sortedMedias?.filter(
    (media) => media.photographerId === photographerToRender!.id
  );

  const [totalLikes, setTotalLikes] = useState(
    photographerMedias?.reduce((acc: number, media) => acc + media.likes, 0)
  );
  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes! + 1);
  };
  const decrementTotalLikes = () => {
    setTotalLikes(totalLikes! - 1);
  };

  const [currentMedia, setCurrentMedia] = useState(photographerMedias[0]);

  const changeMedia = (direction: "next" | "prev") => {
    const currentIndex = photographerMedias.findIndex(
      (media) => media.id === currentMedia.id
    );
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    setCurrentMedia(photographerMedias[newIndex % photographerMedias.length]);
  };

  return (
    <LikesContext.Provider
      value={{ totalLikes, incrementTotalLikes, decrementTotalLikes }}
    >
      <header>
        <Link to={"/"} title="Fisheye Home Page">
          <img src={fisheyeLogo} className="logo" alt="fisheye logo" />
        </Link>
      </header>
      <main id="main">
        <div className="photograph-header">
          <ProfileText photographer={photographerToRender!} />
          <PrimaryBtn />
          <img
            src={`/images/Photographers_Id/${photographerToRender?.portrait}`}
            alt={photographerToRender?.name}
          />
        </div>
      </main>
      <DisplayTotalLikes photographer={photographerToRender!} medias={medias} />
      <Modal photographerName={photographerToRender!.name} />
      <section className="gallery">
        <div className="dropdown-container">
          <p>Trier par</p>
          <Dropdown
            options={["Popularité", "Date", "Titre"]}
            onOptionSelected={setSortMethod}
          />
        </div>
        <ul className="gallery-container">
          {sortedMedias.map((media) => {
            if (media.photographerId === photographerToRender?.id) {
              return (
                <Factory
                  key={media.id}
                  media={media}
                  changeMedia={changeMedia}
                  currentMedia={currentMedia}
                  setCurrentMedia={setCurrentMedia}
                />
              );
            }
          })}
        </ul>
      </section>
    </LikesContext.Provider>
  );
};

export default Photographer;
