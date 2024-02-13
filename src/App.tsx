import { Link } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main id="main">
        <div className="photographer_section">
          <Link to={"/2"}>Salut</Link>
        </div>
      </main>
    </>
  );
};

export default App;
