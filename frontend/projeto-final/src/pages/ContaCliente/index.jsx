import "../../styles/pageStyles/contaClienteStyle.css";
import Header from "../../elements/header.jsx";
import Nav from "../../elements/navegacao.jsx";
import "../../styles/constants.css";
function Home() {
  return (
    <>
      <Header />
      <main id="contaClienteMain">
        <h1>Opa!</h1>
        <h2>Infelizmente, você não pode criar uma conta.</h2>
      </main>
      <Nav/>
    </>
  );
}
export default Home;
