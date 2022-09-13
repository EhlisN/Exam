import React, { useContext } from 'react';
import Context from '../context/context';
import LogIn from './LogIn/LogIn';

const Modal = () => {
  const { openModalLogin, setOpenModalLogin } = useContext(Context);
  return (
    <div
      className={`modal fade ${openModalLogin && 'show d-block'}`}
      tabIndex={1}
    >
      <div className='modal-dialog'>
        <div className='modal modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>LOGIN</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => setOpenModalLogin(false)}
            ></button>
          </div>
          <div className='modal-body'>
            <LogIn />
          </div>
        </div>
        <div
          className={`modal-backdrop fade ${openModalLogin && 'show d-block'}`}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
