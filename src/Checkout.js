import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue()
    return ( 
        <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
        {basket?.length ===0 ? (
            <div>
                <h2>Your Shopping Bassket is Empty</h2>
                <p>
                    you have no item in your basket. to buy one or add to basket click on "Add to basket" next to the item.
                </p>
            </div>
        ):(
            <div>
                <h2 className="checkout__title">Your Shopping basket</h2>
                {basket.map(item => (
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
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
        </div>
    )
}

export default Checkout;
