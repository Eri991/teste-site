import "../../styles/pageStyles/homeStyle.css";
import Header from "../../elements/header.jsx";
import Nav from "../../elements/navegacao.jsx";
import "../../styles/constants.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Header />
      <div id="textoPrincipal">
        <h1>Descontos</h1>
        <h2>de até</h2>
        <h1
          style={{
            color: "var(--pastel-blue)",
            fontSize: "150px",
            textIndent: "10rem",
          }}
        >
          50%
        </h1>
        <Link to="search" state={false}>
        <button id="botaoPrincipal">Aproveite</button>
        </Link>
      </div>
      <div id="imagemPrincipal">
        <img
          src="../../images/tv.png"
          alt="Produto em destaque"
        />
      </div>

      <Nav/>
    </>
  );
}
export default Home;
