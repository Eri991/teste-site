import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../styles/pageStyles/viewProductsStyle.css";
import Header from "../../elements/header.jsx";
import Nav from "../../elements/navegacao.jsx";
import "../../styles/constants.css";
import { FaStar } from "react-icons/fa";
function ViewProducts() {
  const location = useLocation();
  let nameInput = location.state;
  let [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProdutos();
  }, []);
  const getProdutos = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    let array = await response.json();
    let results = []
    for(let item of array) {
      if (item.title.length > 30) {
        item.title = item.title.slice(0, 30) + "...";
      }
      if (nameInput) {
        if (item.title.toUpperCase().includes(nameInput.toUpperCase())) {
          results.push(item);
        }
      } else {
        results.push(item);
      }
    }
    setProdutos(results);
  };

  let notFoundDisplay = "none";
  if (produtos.length == 0){
    notFoundDisplay = "block";
  }
  return (
    <>
      <Header />
      <h1 id="tituloProdutos">Produtos</h1>
      <main id="viewProdutosMain">
        {produtos.map((result) => (
          <div id={result.id} key={result.id} className="productCard">
            <img src={result.image} className="productImage" />
            <div className="productDescription">
              <h2 className="productTitle">{result.title}</h2>
              <div className="productDetails">
              <h3 className="productOriginalPrice"><s>${(result.price*1.5).toFixed(2)}</s></h3>
                <h3 className="productPrice">${result.price.toFixed(2)}</h3>
                <h3 className="productRating">{result.rating.rate}</h3>
                <FaStar className="icon" />
                <button className="buyButton">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        ))}
        ;
      </main>
      <div id="productNotFound" style ={{display: notFoundDisplay}}>
          <h1>Opa!</h1>
          <h2>Parece que não conseguimos encontrar seu produto.</h2>
      </div>
      <Nav />
    </>
  );
}
export default ViewProducts;
