import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCliente } from "../../services/cliente-requests.js";
import "../../styles/constants.css";
import "../../styles/pageStyles/infoClienteStyle.css";

function InfoCliente() {
  const { id } = useParams();
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
    console.log(clienteDados);
    setCliente(clienteDados);
  };
  return (
    <>
      <main id="infoClienteMain">
        <div id="imgBox">
          <img src="../../images/user profile.png" alt="" />
        </div>
        <div id="dados">
          <h2>{cliente.nome}</h2>
          <p>Código</p>
          <p className="dado">{cliente.id}</p>
          <p>Idade</p>
          <p className="dado">{cliente.idade}</p>
          <p>Email</p>
          <p className="dado">{cliente.email}</p>
        </div>
      </main>
    </>
  );
}
export default InfoCliente;
