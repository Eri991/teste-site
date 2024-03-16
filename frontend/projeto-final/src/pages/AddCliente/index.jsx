import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCliente } from "../../services/cliente-requests.js";
import "../../styles/pageStyles/addStyle.css";
import "../../styles/constants.css";
function AddCliente() {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    nome: "",
    idade: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((clienteAnterior) => {
      return {
        ...clienteAnterior,
        [name]: value,
      };
    });
  };

  const salvaCliente = async (event) => {
    event.preventDefault();
    console.log(cliente);
    await addCliente(cliente);
    navigate("/cliente/view");
  };
  return (
    <>
      <h1 id="tituloAdd">Adicionar cliente</h1>
      <main id="mainContent">
        <form onSubmit={salvaCliente}>
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
          <button type="submit">Salvar</button>
        </form>
      </main>
    </>
  );
}
export default AddCliente;
