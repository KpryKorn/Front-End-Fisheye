import { Link } from "react-router-dom";
import Header from "./components/Header";
import { Thumbnail } from "./components/photographer-items";
import data from "./data/photographers.json"; // fetch les données du fichier json local

const App = () => {
  console.log(data.photographers);

  return (
    <>
      <Header />
      <main id="main">
        <div className="photographer_section">
          <Link to={"/2"}>Salut</Link>
          <Thumbnail photographer={data.photographers[0]} />
        </div>
      </main>
    </>
  );
};

export default App;
