import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, ratings, seller}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
              <h6 className='product-name'>{name}</h6>
              <p>Price: ${price}</p>
              <p>Manufacturer: {seller}</p>
              <p>Rating: {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;