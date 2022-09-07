import React, { FC, useEffect, useState, useContext } from 'react';
import { IProduct } from '../components/Products/IProduct';
import './Products.css';
import { initialUser } from '../components/Products/initialProduct';
import http from '../components/http';
import UserCards from '../components/Products/ProductCards';
import Search from '../components/Search';
import { useSearch } from '../hooks/useSearch';
import Context from '../context/context';

const Users: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(initialUser);
  const { openModalLogin } = useContext(Context);

  const getProduct = async () => {
    try {
      const products = await http.get('users');
      setProducts(products.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const searchedProduct = useSearch(
    products,
    'first_name',
    'last_name',
    search
  );

  return (
    <>
      <Search
        btnName={'Add new User'}
        field={'Enter Username'}
        setOpenModal={setOpenModal}
        setSearch={setSearch}
      ></Search>
      <UserCards products={searchedProduct}></UserCards>
    </>
  );
};

export default Users;
