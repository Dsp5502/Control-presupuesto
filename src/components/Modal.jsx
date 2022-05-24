import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';

const Modal = ({ setModal }) => {
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img onClick={() => setModal(false)} src={CerrarBtn} alt='cerrar' />
      </div>
    </div>
  );
};

export default Modal;
