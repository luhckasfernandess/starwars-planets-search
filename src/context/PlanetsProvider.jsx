import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsFetchAPI from './PlanetsFetchAPI';

function PlanetsProvider({ children }) {
  const [data] = PlanetsFetchAPI();
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
