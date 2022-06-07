import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  // Cria meu estado global
  const [data, setData] = useState({});
  // Fazer a requisição da API no componentDidMount
  useEffect(() => {
    const planetsFetchAPI = async () => {
      const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchData = await (await fetch(API_URL)).json();
      // Salvar o retorno da API no meu estado global
      setData(fetchData);
    };
    planetsFetchAPI();
  }, []);
  const contextValue = { data };
  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
