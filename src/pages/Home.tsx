import Header from "../components/Header";
import { Thumbnail } from "../components/photographer-items";
import data from "../data/photographers.json"; // fetch les données du fichier json local


const Home = () => {
  const photographers = data.photographers;

  return (
    <>
      <Header />
      <main id="main">
        <section className="photographer_section">
          {photographers.map((photographer, idx) => {
            return <Thumbnail key={idx} photographer={photographer} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Home;