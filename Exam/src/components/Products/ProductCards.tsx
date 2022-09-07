import React from 'react';
import Spinner from '../Spinner/Spinner';
import { IProduct } from './IProduct';

const UserCards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.length ? (
        products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img src={product.avatar} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{`#${product.id} - ${product.first_name} ${product.last_name}`}</h5>
                <p className="card-text">E-mail: {product.email}</p>
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

export default UserCards;
