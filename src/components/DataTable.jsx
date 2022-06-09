import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function DataTable() {
  const { data, filterData, setFilterData } = useContext(PlanetsContext);
  // console.log(data);
  function handleFilterChange({ target: { name, value } }) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const nameFilter = data.filter((planet) => (planet.name.toLowerCase()
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
      .includes(value.toLowerCase())));
    setFilterData((prevData) => ({
      ...prevData,
      [name]: nameFilter,
      filterByNumericValues: [{
        ...prevData.filterByNumericValues[0],
        [name]: value,
      }],
    }));
  }
  function filterNumericButton() {
    const { filterByNumericValues } = filterData;
    const { column, comparison, value } = filterByNumericValues[0];
    const teste = data.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return null;
    });
    setFilterData((prevData) => ({
      ...prevData,
      filterByName: teste,
    }));
    console.log(comparison);
  }
  // Eu tentei usar o slice e o splice mas ficou um código grande
  const title = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_wate',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];
  const { filterByName } = filterData;
  return (
    <div>
      <input
        type="text"
        name="filterByName"
        data-testid="name-filter"
        placeholder="Search"
        onChange={ handleFilterChange }
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleFilterChange }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleFilterChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        name="value"
        defaultValue="0"
        data-testid="value-filter"
        onChange={ handleFilterChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumericButton }
      >
        Filtrar
      </button>
      <table>
        <tbody>
          <tr>
            {title.map((planet, index) => (
              <th key={ index }>{ planet }</th>
            ))}
          </tr>
          {filterByName.map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
