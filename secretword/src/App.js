import React, { useState } from 'react';
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // Chama o hook personalizado useFetch para buscar dados da URL
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // Estados para armazenar o nome e preço do produto
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // Chama a configuração HTTP para enviar um produto via POST
    httpConfig(product, "POST");

    // Reseta os campos do formulário
    setName("");
    setPrice("");
  };

  // Função para remover um produto pelo ID
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
