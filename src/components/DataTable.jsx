import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function DataTable() {
  const { data, nameFilterData, setNameFilterData } = useContext(PlanetsContext);
  // console.log(data);
  function handleFilterChange({ target: { value } }) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const nameFilter = data.filter((planet) => (planet.name.toLowerCase()
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
      .includes(value.toLowerCase())));
    setNameFilterData(nameFilter);
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
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search"
        onChange={ handleFilterChange }
      />
      <table>
        <tbody>
          <tr>
            {title.map((planet, index) => (
              <th key={ index }>{ planet }</th>
            ))}
          </tr>
          {nameFilterData.map((planet, index) => (
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
