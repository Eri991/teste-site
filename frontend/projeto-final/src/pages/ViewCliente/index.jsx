import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClientes, removeCliente } from "../../services/cliente-requests.js";
import { FaTrash, FaEdit, FaInfoCircle } from "react-icons/fa";
import "../../styles/pageStyles/viewStyle.css";
import "../../styles/constants.css";
function ViewCliente() {
  let [clientes, setClientes] = useState([]);

  useEffect(() => {
    carregaClientes();
  }, []);
  const carregaClientes = async () => {
    const clientesResponse = await getClientes();
    setClientes(await clientesResponse.data);
  };
  const deleteCliente = async (id) => {
    await removeCliente(id);
  };
  return (
    <>
      <h1>View Cliente</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id} id={cliente.id}>
              <td data-label="Id">
                <div>{cliente.id}</div>
              </td>
              <td data-label="Nome">
                <div>{cliente.nome}</div>
              </td>
              <td data-label="Idade">
                <div>{cliente.idade}</div>
              </td>
              <td data-label="Email">
                <div>{cliente.email}</div>
              </td>
              <td>
                <div>
                  <Link to={`../info/${encodeURIComponent(cliente.id)}`}>
                    <button>
                      <FaInfoCircle className="icon" />
                    </button>
                  </Link>
                  <Link to={`../edit/${encodeURIComponent(cliente.id)}`}>
                    <button>
                      <FaEdit className="icon" />
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      deleteCliente(cliente.id);
                      clientes = [];
                      carregaClientes();
                      window.location.reload();
                    }}
                  >
                    <FaTrash className="icon" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ViewCliente;
