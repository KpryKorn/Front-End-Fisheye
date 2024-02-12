import fisheyeLogo from "/images/logo.png";

const Header = () => {
  return (
    <header>
      <img src={fisheyeLogo} className="logo" alt="fisheye logo" />
      <h1>Nos photographes</h1>
    </header>
  );
};

export default Header;
