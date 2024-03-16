import { Outlet } from "react-router-dom";
import "../../styles/pageStyles/clienteStyle.css";
import Header from "../../elements/header.jsx";
import Nav from "../../elements/navegacao.jsx";
import "../../styles/constants.css";
function Cliente() {
  return (
    <>
    <Header/>
    <header id="warningHeader">
      <h1>Atenção!</h1>
      <p>Esta área é reservada para administradores. <br /> Se você está aqui, parabéns! 👍</p>
    </header>
      <Outlet />
      <Nav/>
    </>
  );
}
export default Cliente;
