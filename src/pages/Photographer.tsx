import { Link } from "react-router-dom";
import { closeModal } from "../lib/utils";
import data from "../data/photographers.json";
import fisheyeLogo from "/images/logo.png";
import {
  ProfileText,
  DisplayTotalLikes,
} from "../components/photographer-items";
import { PrimaryBtn, Dropdown } from "../components/buttons";
import Factory from "../components/Factory";

const Photographer = () => {
  const URLId = window.location.pathname.split("/")[1];

  // comparer ID de l'URL avec ID du photographe à afficher dynamiquement
  const photographerToRender = data.photographers.find(
    (photographer) => photographer.id.toString() === URLId.toString()
  );

  const medias = data.media;

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
      <DisplayTotalLikes photographer={photographerToRender!} medias={medias} />
      <div id="contact_modal">
        <div className="modal">
          <header>
            <h2>Contactez-moi</h2>
            <img
              src="/icons/close.svg"
              onClick={closeModal}
              alt="Icone pour fermer la modale"
            />
          </header>
          <form>
            <div>
              <label>Prénom</label>
              <input />
            </div>
            <button className="contact_button">Envoyer</button>
          </form>
        </div>
      </div>
      <section className="gallery">
        <div className="dropdown-container">
          <p>Trier par</p>
          <Dropdown options={["Popularité", "Date", "Titre"]} />
        </div>
        <ul className="gallery-container">
          {medias
            .sort((a, b) => b.likes - a.likes)
            .map((media) => {
              if (media.photographerId === photographerToRender?.id) {
                return <Factory key={media.id} media={media} />;
              }
            })}
        </ul>
      </section>
    </>
  );
};

export default Photographer;
