import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img
            className="checkout__ad"
            src="https://theross.ml/0:/project/banner-ads.jpg"
            />
            {basket?.length ==0 ? (
                  <div>
                   <h2>Your Shopping Basket is empty</h2>
                   <p>You have no items in your basket.To buy one or "Add to Basket" next to the item.</p>   
                   </div>  
            ):(
                <div>
                   <h2 className="checkout_title">Your Shopping Basket </h2>   
                   {basket?.map(item =>(
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                   ))}
                   </div>

            )}
        </div>
        {basket.length >0 && (
            <div className="checkout_right">
                <Subtotal/>
                {/* <h1>subtotal</h1> */}
            </div>
        )}
        </div>
    );
}

export default Checkout;
 