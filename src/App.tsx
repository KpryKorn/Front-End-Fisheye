import fisheyeLogo from "/images/logo.png";

const App = () => {
  return (
    <>
      <header>
        <img src={fisheyeLogo} className="logo" alt="fisheye logo" />
        <h1>Nos photographes</h1>
      </header>
      <main id="main">
        <div className="photographer_section"></div>
      </main>
    </>
  );
};

export default App;
