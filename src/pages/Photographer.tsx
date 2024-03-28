import { Link } from "react-router-dom";
import data from "../data/photographers.json";
import fisheyeLogo from "/images/logo.png";
import {
  ProfileText,
  DisplayTotalLikes,
} from "../components/photographer-items";
import { PrimaryBtn, Dropdown } from "../components/buttons";
import Factory from "../components/Factory";
import { useState } from "react";
import Modal from "../components/Modal";

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
    } return 0;
  });

  return (
    <>
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
      <DisplayTotalLikes
        photographer={photographerToRender!}
        medias={medias}
      />
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
                />
              );
            }
          })}
        </ul>
      </section>
    </>
  );
};

export default Photographer;
