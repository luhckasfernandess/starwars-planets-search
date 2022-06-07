import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsFetchAPI from './PlanetsFetchAPI';

function PlanetsProvider({ children }) {
  const [data] = PlanetsFetchAPI();
  const [nameFilterData, setNameFilterData] = useState([]);
  useEffect(() => { setNameFilterData(data); }, [data]);
  const contextValue = { data, nameFilterData, setNameFilterData };
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
