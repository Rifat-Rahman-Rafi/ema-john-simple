import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
 const [cart,setCart]=useState([]);

 const [orderPlaced,setOrderPlaced]=useState(false);

 const history=useHistory()

 const  handleProceedCheckout=()=>{
   
    history.push('/shipment');

    
 }
  
 const removeProduct=(productKey)=>{

    //console.log('removed clicked');
    const newCart=cart.filter(pd=>pd.key!==productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
 }

 useEffect(()=>{
     
    const savedCart=getDatabaseCart();
    const productKeys=Object.keys(savedCart);
    const cartProducts=productKeys.map(key => {
        const product=fakeData.find(pd=> pd.key=== key);
        product.quantity=savedCart[key];
        return product;
    });
      
    setCart(cartProducts);
 },[])


   let thankyou;
   if(orderPlaced){
       thankyou=<img src={happyImage} alt=""/>
   }

 const itemStyle={
     
    textAlign:'center',
    marginBottom:'15px',
    marginTop:'15px'
 }

    return (

    <>

<h1 style={itemStyle}>Cart Items:{cart.length} </h1>
        
        <div className="shop-container">
            <div className="product-container">
              
            {
                cart.map(pd=><ReviewItem
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></ReviewItem>)
            }
            {
                thankyou
            }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={handleProceedCheckout} className="main-btn">Proceed Checkout</button>
                </Cart>
            </div>
           
        </div>
        </>
    );
   
};

export default Review;