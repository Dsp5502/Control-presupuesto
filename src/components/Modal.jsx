import { useState } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animarModal, setAnimarModal, GuardarGasto }) => {
  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleCerrarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios');
      setTimeout(() => {
        setMensaje('');
      }, 1000);
      return;
    }
    GuardarGasto({ nombre, cantidad, categoria });
  };
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img onClick={handleCerrarModal} src={CerrarBtn} alt='cerrar' />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'> {mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            type='text'
            id='nombre'
            placeholder='Añade el nombre del gasto'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            type='number'
            id='cantidad'
            placeholder='Añade la cnatidad del gasto: ej. 300'
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'>Categoria</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            id='categoria'
          >
            <option value=''>-- Seleccione --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>
        <input type='submit' value='Añadir Gasto' />
      </form>
    </div>
  );
};

export default Modal;