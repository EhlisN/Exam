import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

const NavBar = () => {
  const { isLoginUser, setIsLoginUser, setOpenModalLogin } =
    useContext(Context);
  const logOut = () => {
    setIsLoginUser(false);
    localStorage.clear();
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark myShadow'>
      <div className='container-fluid p-2'>
        {isLoginUser ? (
          <>
            <div className='d-flex'>
              <ul className='navbar-nav mb-lg-0 mx-3'>
                <li className='nav-item'>
                  <Link className='nav-link' to='products'>
                    Products
                  </Link>
                </li>
              </ul>
              <ul className='navbar-nav mb-lg-0 mx-3'>
                <li className='nav-item'>
                  <Link className='nav-link' to='cabinet'>
                    Cabinet
                  </Link>
                </li>
              </ul>
            </div>
            <button className='btn btn-primary' onClick={() => logOut()}>
              LogOut
            </button>
          </>
        ) : (
          <Link
            to='login'
            className='btn btn-primary'
            onClick={() => setOpenModalLogin(true)}
          >
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
