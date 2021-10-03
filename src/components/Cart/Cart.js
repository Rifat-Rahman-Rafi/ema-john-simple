import React from 'react';


const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0;i<cart.length;i++)
    {
        const val=cart[i];
        total=total+val.price*val.quantity;
    }
    let shipping=0;
   
    if(total>50){
        shipping=0;
    }

    else if(total>15)
    {
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    const tax = (total/10).toFixed(2);

    // total.toFixed(2);

    const totalPrice=(total+shipping+ Number(tax)).toFixed(2)


    return (
        <div >
             <h4  className="text-primary">Order Summary</h4>
             
             <p>Items Ordered : {cart.length}</p>
             <p>Products Price: {(total).toFixed(2)}</p>
             <p><small>Shipping Cost : {shipping}</small></p>
             <p><small>Tax + VAT : {tax}</small></p>
             <p>Total Price : {totalPrice}</p>
             <br></br>
             {
                 props.children
             }
        </div>
    );
};

export default Cart;