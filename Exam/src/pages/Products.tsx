import React, { FC, useEffect, useMemo, useState } from 'react';
import { IProduct } from '../components/Products/IProduct';
import './Products.css';
import http from '../components/http';
import ProductCards from '../components/Products/ProductCards';
import Search from '../components/Search';
import { useSearch } from '../hooks/useSearch';

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const getProduct = async () => {
    try {
      const products = await http.get('products');
      setProducts(products.data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const sortProducts = useMemo(() => {
    if (sort === 'title') {
      setProducts(products.sort((a, b) => (a.title > b.title ? 1 : -1)));
    } else if (sort === 'brand') {
      setProducts(products.sort((a, b) => (a.brand > b.brand ? 1 : -1)));
    } else if (sort === 'price') {
      setProducts(products.sort((a, b) => (a.price > b.price ? 1 : -1)));
    } else {
      setProducts(products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
    return products;
  }, [sort, products]);

  const searchedProduct = useSearch(products, search, 'title');

  return (
    <>
      <Search name={'Enter name'} setSearch={setSearch}></Search>
      <select
        className='form-select myShadow my-3'
        onChange={(event) => setSort(event.target.value)}
      >
        <option defaultValue=''>No sort</option>
        <option value='title'>Title</option>
        <option value='brand'>Brand</option>
        <option value='price'>Price</option>
      </select>
      <ProductCards products={searchedProduct}></ProductCards>
    </>
  );
};

export default Products;
