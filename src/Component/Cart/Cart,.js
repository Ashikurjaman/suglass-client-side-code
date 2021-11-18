import React from 'react';

const Cart = ({cart}) => {
    
let total = 0;
for (const product in cart){
    total = parseInt(total + product.price)
}


    return (
        <div>
            <h3>Order summary</h3>
            <h3>Items ordered</h3>
            <br/>
            <p>Total:{total.toFixed(2)}</p>
            <p>Shipping</p>
            <p>tax</p>
            <p>Total Amount</p>
        </div>
    );
};

export default Cart;