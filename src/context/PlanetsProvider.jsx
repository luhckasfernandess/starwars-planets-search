import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsFetchAPI from './PlanetsFetchAPI';

function PlanetsProvider({ children }) {
  const [data] = PlanetsFetchAPI();
  const [filterData, setFilterData] = useState({
    filterByName: [],
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: 0 }],
  });
  useEffect(() => {
    setFilterData((prevData) => ({
      ...prevData, filterByName: data }));
  }, [data]);
  const contextValue = { data, filterData, setFilterData };
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
