import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, handleClearCart} = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = total * .1; /*100/10*/
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Orders</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total shipping cost: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={handleClearCart}>Place Order</button>
        </div>
    );
};

export default Cart;



