import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        console.log(item);
        const newCart = [...cart, item] ;
        setCart(newCart);
    } ;
    return (
        <div className='shop-container'>
            <div className="product-container">    
                    {
                        products.map( (product) =>  
                            <Product product = {product} handleClick = {handleClick} > </Product>
                        )
                    }

            </div>
            <div className='dim'>
                    <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;