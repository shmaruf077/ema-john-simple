import React from 'react';
import './Product..css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;

    return (
        <div className = 'product'>
            <div>
                <img src={img} alt="product" />
            </div>
            <div className='product-info'>
                <h4 className='product-name'> {name} </h4>
                <p> <small> by: {seller} </small> </p>
                <p> Price: {price} </p>
                <p> {stock} items only left is stock </p>
                <button onClick= {() => props.handleClick(props.product)} className='add-cart-btn'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>

            </div>
        </div>
    );
};

export default Product;