import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const {initialCart} = useLoaderData();
    const [cart, setCat] = useState(initialCart);
    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCat(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        setCat([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="orderds-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem> )
                }
                {
                    cart.length === 0 && <h2>Please shop first <Link to='/shop'>GO</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;