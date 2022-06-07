import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import DataTable from './components/DataTable';

function App() {
  return (
    <PlanetsProvider>
      <DataTable />
    </PlanetsProvider>
  );
}

export default App;
