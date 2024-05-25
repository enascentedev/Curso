import { useEffect, useState } from "react";

// Hook personalizado para fazer requisições HTTP
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemId, setItemId] = useState(null);

  // Função para configurar a requisição HTTP
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod("DELETE");
      setItemId(data);
    }
  };

  // Effect para buscar dados ao carregar o componente ou URL mudar
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setMethod(null);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError("Houve um erro ao carregar os dados!");
      }
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // Effect para fazer requisições HTTP POST e DELETE
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        setLoading(true);

        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);
        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config]);

  return { data, httpConfig, loading, error };
};
