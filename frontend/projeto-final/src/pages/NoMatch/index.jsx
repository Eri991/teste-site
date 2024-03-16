import "../../styles/pageStyles/noMatchStyle.css";
import "../../styles/constants.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
    <main id="noMatchMain">
      <h1>NoMatch</h1>
      <h2>Sua página não foi encontrada</h2>
      <p>Isso pode ocorrer quando é digitado um link que não existe, ou quando um dado não é encontrado.</p>
      <Link to="/">
        <button id="homeButton">
          <FaHome id="icon"/>
        </button>
      </Link>
    </main>
    </>
  );
}
export default NoMatch;
