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
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) {
      newIndex = photographerMedias.length - 1;
    } else if (newIndex === photographerMedias.length) {
      newIndex = 0;
    }
    setCurrentMedia(photographerMedias[newIndex]);
  };
  return (
    <LikesContext.Provider
      value={{ totalLikes, incrementTotalLikes, decrementTotalLikes }}
    >
      <header>
        <Link to={"/"} aria-label="Fisheye Home Page">
          <img src={fisheyeLogo} className="logo" alt="fisheye logo" />
        </Link>
      </header>
      <main id="main" role="main">
        <div className="photograph-header">
          <ProfileText photographer={photographerToRender!} />
          <PrimaryBtn />
          <img
            src={`/images/Photographers_Id/${photographerToRender?.portrait}`}
            alt={photographerToRender?.name}
            role="img"
            aria-label={photographerToRender?.name}
          />
        </div>
      </main>
      <DisplayTotalLikes photographer={photographerToRender!} medias={medias} />
      <Modal photographerName={photographerToRender!.name} />
      <section className="gallery" role="region" aria-label="Galerie de photos">
        <div className="dropdown-container">
          <p id="sort-label">Trier par</p>
          <Dropdown
            options={["Popularité", "Date", "Titre"]}
            onOptionSelected={setSortMethod}
            aria-labelledby="sort-label"
          />
        </div>
        <ul className="gallery-container" role="list">
          {sortedMedias.map((media) => {
            if (media.photographerId === photographerToRender?.id) {
              return (
                <li role="listitem" key={media.id}>
                  <Factory
                    media={media}
                    changeMedia={changeMedia}
                    currentMedia={currentMedia}
                    setCurrentMedia={setCurrentMedia}
                  />
                </li>
              );
            }
          })}
        </ul>
      </section>{" "}
    </LikesContext.Provider>
  );
};

export default Photographer;
