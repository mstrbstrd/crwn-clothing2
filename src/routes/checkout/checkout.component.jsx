import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
    return (
        <div>
            <h1>I am the checkout page bitch!</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const { name, id, quantity, price } = cartItem;
                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                                <span onClick={() => addItemToCart(cartItem)}>increment</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Checkout;