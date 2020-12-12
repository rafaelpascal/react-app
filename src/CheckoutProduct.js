import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CeckoutProduct({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }

    return (
        <div className ="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                     <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p><img className="product__star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoDVi12e4dclijkE5bRdfdIb8p-Fsgu_a4Cw&usqp=CAU" alt=""/></p>
                    ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CeckoutProduct
