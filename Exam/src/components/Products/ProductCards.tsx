import React from 'react';
import Spinner from '../Spinner/Spinner';
import { IProduct } from './IProduct';

const ProductCards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      {products.length ? (
        products.map((product) => (
          <div className='col' key={product.id}>
            <div className='card'>
              <img
                src={product.thumbnail}
                className='card-img-top'
                alt='product'
              />
              <div className='card-body'>
                <h5 className='card-title'>{`#${product.title} - ${product.brand}`}</h5>
                <p className='card-text'>Price: {product.price}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ProductCards;
