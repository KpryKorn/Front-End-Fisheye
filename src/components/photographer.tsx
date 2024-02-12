import { displayModal, closeModal } from "../lib/utils";

const Photographer = () => {
  return (
    <>
      <main id="main">
        <div className="photograph-header">
          <button className="contact_button" onClick={displayModal}>
            Contactez-moi
          </button>
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
