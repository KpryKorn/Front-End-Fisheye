import { Link } from "react-router-dom";
import fisheyeLogo from "/images/logo.png";

const Header = () => {
  return (
    <header>
      <Link to={"/"} title="Fisheye Home Page"><img src={fisheyeLogo} className="logo" alt="fisheye logo" /></Link>
      <h1>Nos photographes</h1>
    </header>
  );
};

export default Header;
