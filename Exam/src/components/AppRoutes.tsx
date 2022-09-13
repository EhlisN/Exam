import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import User from '../pages/User';
import Context from '../context/context';
import Product from '../pages/Product';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);

  return isLoginUser ? (
    <Routes>
      <Route path='*' element={<Products />} />
      <Route path='products/:id' element={<Product />} />
      <Route path='cabinet' element={<User />} />
    </Routes>
  ) : (
    <Routes>
      <Route path='*' element={<Products />} />
    </Routes>
  );
};

export default AppRoutes;
