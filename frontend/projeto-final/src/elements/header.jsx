import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import "./styles/headerStyle.css";
function Header() {
  const navigate = useNavigate();
  const goToProducts = async (event) => {
    event.preventDefault();
    let input = document.getElementById("inputSearch");
    let nameInput = input.value;
    navigate("../search", { state: nameInput });
    window.location.reload();
    };
  return (
    <>
      <header id="cabecalho">
        <div id="divSearch">
          <form onSubmit={goToProducts}>
          <button type="submit" id="buttonSearch" >
            <FaSearch />
          </button>
          <input
            required
            type="text"
            name="inputSearch"
            id="inputSearch"
            placeholder="Digite o produto que deseja..."
            onKeyDown={(event) => (event.key === "Enter" ? goToProducts() : "")}
          />
          </form>
        </div>
        <div id="logoDiv">
          <Link to="/">
            <img src="../../images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div id="contaDiv">
          <Link to="/account" style={{ textDecoration: "none" }}>
            <button id="contaButton">
              Conta <FaUserCircle id="usericon" />
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
