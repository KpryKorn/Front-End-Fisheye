import { Link } from "react-router-dom";
import { displayModal, closeModal } from "../lib/utils";
import data from "../data/photographers.json";
import fisheyeLogo from "/images/logo.png";
import { ProfileText } from "../components/photographer-items";
import { PrimaryBtn } from "../components/buttons";

const Photographer = () => {
  const URLId = window.location.pathname.split("/")[1];

  // comparer ID de l'URL avec ID du photographe à afficher dynamiquement
  const photographerId = data.photographers.find(
    (photographer) => photographer.id.toString() === URLId.toString()
  );

  return (
    <>
      <header>
        <Link to={"/"} title="Fisheye Home Page">
          <img src={fisheyeLogo} className="logo" alt="fisheye logo" />
        </Link>
      </header>
      <main id="main">
        <div className="photograph-header">
          <ProfileText photographer={photographerId!} />
          <PrimaryBtn />
          <img
            src={`/images/Photographers_Id/${photographerId?.portrait}`}
            alt={photographerId?.name}
          />
        </div>
      </main>
      <div id="contact_modal">
        <div className="modal">
          <header>
            <h2>Contactez-moi</h2>
            <img src="/icons/close.svg" onClick={closeModal} />
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
    </>
  );
};

export default Photographer;
