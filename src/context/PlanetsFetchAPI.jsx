import { useState, useEffect } from 'react';

function PlanetsFetchAPI() {
  const [data, setData] = useState([]);
  // Fazer a requisição da API no componentDidMount
  useEffect(() => {
    const fetchAPI = async () => {
      const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchData = await (await fetch(API_URL)).json();
      // Salvar o retorno da API no meu estado global
      setData(fetchData.results);
    };
    fetchAPI();
  }, []);
  return [data];
}

export default PlanetsFetchAPI;
