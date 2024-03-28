import { closeModal } from "../lib/utils";

const Modal = ({photographerName}: {photographerName: string}) => {
  return (
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
        <h3 className="modal-name">{photographerName}</h3>
        <form id="contact-form" onSubmit={() => console.log(FormData)}>
          <div>
            <label htmlFor="first-name">Prénom</label>
            <input
              id="first-name"
              type="text"
              minLength={2}
              name="first-name"
              required
            />
            <label htmlFor="last-name">Nom</label>
            <input
              id="last-name"
              type="text"
              minLength={2}
              name="last-name"
              required
            />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
            <label htmlFor="form-message">Votre message</label>
            <input
              id="form-message"
              type="text"
              minLength={2}
              name="form-message"
              required
            />
          </div>
          <button className="contact_button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
