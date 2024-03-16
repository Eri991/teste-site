import { FaHome, FaEye, FaPlusCircle, FaEdit, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/navStyle.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  function getID() {
    let id = parseInt(prompt("Insira o ID do cliente"));
    id ? navigate(`/cliente/edit/${id}`) : '';
    window.location.reload();
  }
  return (
    <>
      <nav id="navegacao">
        <ul id="lista">
          <li>
            <Link to="/">
              <button>
                <FaHome className="icon" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <button>
                <FaShoppingBag className="icon" />
              </button>
            </Link>
          </li>
          <hr/>
          <li>
            <Link to="/cliente/view">
              <button className="adminOption">
                <FaEye className="icon" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/cliente">
              <button className="adminOption">
                <FaPlusCircle className="icon" />
              </button>
            </Link>
          </li>
          <li>
            <button onClick={getID} className="adminOption">
              <FaEdit className="icon" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
