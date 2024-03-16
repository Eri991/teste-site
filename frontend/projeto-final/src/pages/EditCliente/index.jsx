import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCliente, getCliente } from "../../services/cliente-requests.js";
import "../../styles/pageStyles/editStyle.css";
function EditCliente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    id: "",
    nome: "",
    idade: "",
    email: "",
  });
  useEffect(() => {
    buscaCliente(id);
  }, []);
  const buscaCliente = async (id) => {
    const clienteDados = await (await getCliente(id)).data;
    setCliente(clienteDados);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((clienteAnterior) => {
      return {
        ...clienteAnterior,
        [name]: value,
      };
    });
  };

  const editarCliente = async (event) => {
    event.preventDefault();
    await editCliente(cliente).catch(navigate("../../*"));
    navigate("/cliente/view");
  };
  return (
    <>
      <h1 id="tituloEdit">Editar cliente</h1>
      <main id="mainContent">
        <form onSubmit={editarCliente}>
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={cliente.id}
            onChange={handleChange}
            className="blockedInput"
            readOnly
          />

          <label>Nome</label>
          <input
            required
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
          />
          <label>Idade</label>
          <input
            required
            type="number"
            min="1"
            name="idade"
            value={cliente.idade}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
          />
          <button type="submit">Atualizar cliente</button>
        </form>
      </main>
    </>
  );
}
export default EditCliente;
