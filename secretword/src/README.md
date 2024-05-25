
# Documentação do Projeto

## Arquivo App.js

**import React, { useState } from 'react';**  
Importa o React e o hook useState para gerenciar estados no componente.

**import { useFetch } from "./hooks/useFetch";**  
Importa o hook personalizado useFetch para fazer requisições HTTP.

**const url = "http://localhost:3000/products";**  
Define a URL da API para buscar dados dos produtos.

**function App() { ... }**  
Componente principal da aplicação.

- **const { data: items, httpConfig, loading, error } = useFetch(url);**  
Chama o hook personalizado useFetch para buscar dados da URL e retorna os dados, configuração HTTP, estado de carregamento e erro.

- **const [name, setName] = useState("");**  
Define o estado local para o nome do produto.

- **const [price, setPrice] = useState("");**  
Define o estado local para o preço do produto.

- **const handleSubmit = async (e) => { ... };**  
Função para lidar com o envio do formulário.
  - **e.preventDefault();**  
  Evita o comportamento padrão do formulário de recarregar a página.
  - **const product = { name, price };**  
  Cria um objeto de produto com os valores de nome e preço.
  - **httpConfig(product, "POST");**  
  Chama a configuração HTTP para enviar um produto via método POST.
  - **setName(""); setPrice("");**  
  Reseta os campos do formulário.

- **const handleRemove = (id) => { ... };**  
Função para remover um produto pelo ID.
  - **httpConfig(id, "DELETE");**  
  Chama a configuração HTTP para enviar uma requisição de exclusão via método DELETE.

- **return ( ... );**  
Renderiza o componente.

## Arquivo useFetch.js

**import { useEffect, useState } from "react";**  
Importa os hooks useEffect e useState do React.

**export const useFetch = (url) => { ... };**  
Define o hook personalizado useFetch.

- **const [data, setData] = useState(null);**  
Define o estado para armazenar os dados da API.

- **const [config, setConfig] = useState(null);**  
Define o estado para armazenar a configuração da requisição HTTP.

- **const [method, setMethod] = useState(null);**  
Define o estado para armazenar o método da requisição HTTP (POST ou DELETE).

- **const [callFetch, setCallFetch] = useState(false);**  
Define o estado para controlar quando a fetch deve ser chamada.

- **const [loading, setLoading] = useState(false);**  
Define o estado para indicar se os dados estão sendo carregados.

- **const [error, setError] = useState(false);**  
Define o estado para armazenar mensagens de erro.

- **const [itemId, setItemId] = useState(null);**  
Define o estado para armazenar o ID do item a ser excluído.

- **const httpConfig = (data, method) => { ... };**  
Função para configurar a requisição HTTP.
  - **if (method === "POST") { ... }**  
  Se o método for POST, configura a requisição para enviar dados JSON.
  - **else if (method === "DELETE") { ... }**  
  Se o método for DELETE, configura a requisição para excluir um item pelo ID.

- **useEffect(() => { ... }, [url, callFetch]);**  
Efeito para buscar dados ao carregar o componente ou quando a URL muda.
  - **const fetchData = async () => { ... };**  
  Função assíncrona para buscar dados da API.
  - **setLoading(true);**  
  Define o estado de carregamento como verdadeiro.
  - **const res = await fetch(url);**  
  Faz a requisição à URL.
  - **const json = await res.json();**  
  Converte a resposta em JSON.
  - **setData(json); setMethod(null); setError(null);**  
  Armazena os dados, reseta o método e o erro.
  - **setLoading(false);**  
  Define o estado de carregamento como falso.

- **useEffect(() => { ... }, [config]);**  

Efeito para fazer requisições HTTP POST e DELETE.
  - **const httpRequest = async () => { ... };**  
  Função assíncrona para fazer a requisição HTTP.
  - **if (method === "POST") { ... }**  
  Se o método for POST, faz a requisição para criar um novo produto.
  - **else if (method === "DELETE") { ... }**  
  Se o método for DELETE, faz a requisição para excluir um produto pelo ID.

- **return { data, httpConfig, loading, error };**  
Retorna os dados, a função de configuração HTTP, o estado de carregamento e o erro.

Este documento explica o funcionamento de cada parte do código, facilitando o entendimento para desenvolvedores iniciantes.
