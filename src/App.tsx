import { Link } from "react-router-dom";
import Header from "./components/Header";
import { homePath } from "./main";

const App = () => {
  return (
    <>
      <Header />
      <main id="main">
        <div className="photographer_section">
          <Link to={`${homePath}/2`}></Link>
        </div>
      </main>
    </>
  );
};

export default App;
