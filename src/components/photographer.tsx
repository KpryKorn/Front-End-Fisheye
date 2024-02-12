const Photographer = () => {
  return (
    <>
      <main id="main">
        <div className="photograph-header">
          {/* onClick => open la modale */}
          <button className="contact_button">Contactez-moi</button>
        </div>
      </main>
      <div id="contact_modal">
        <div className="modal">
          <header>
            <h2>Contactez-moi</h2>
            {/* onClick => close la modale */}
            <img src="assets/icons/close.svg" />
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
