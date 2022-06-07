import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function DataTable() {
  const { data } = useContext(PlanetsContext);
  // console.log(data);
  // console.log(results);
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
    // <h1>Hello Universe!</h1>
    <table>
      <tbody>
        <tr>
          {title.map((planet, index) => (
            <th key={ index }>{ planet }</th>
          ))}
        </tr>
        {data.map((planet, index) => (
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
  );
}

export default DataTable;
