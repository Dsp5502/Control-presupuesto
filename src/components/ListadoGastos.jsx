import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  EliminarGasto,
  gastosFiltrado,
  filtro,
}) => {
  return (
    <div className='listado-gastos contenedor'>
      {filtro ? (
        <>
          <h2>{gastosFiltrado.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
          {gastosFiltrado.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              EliminarGasto={EliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              EliminarGasto={EliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
