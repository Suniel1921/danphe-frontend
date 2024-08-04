import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../cart/cart.css';
import { MdDeleteForever } from "react-icons/md";
import { useAuthGlobally } from '../../contexts/AuthContext';
import { useCartGlobally } from '../../contexts/cartContext';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartGlobally();
    const [auth, setAuth] = useAuthGlobally();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);

    const handleCheckout = () => {
        if (!auth.user) {
            navigate('/login');
        } else {
            navigate('/contact-info');
        }
    };

    return (
        <div className="cart">
            <div className="container">
                <h3>Shopping Cart</h3>
                <div className="cartContainer">
                    <div className="cartItems">
                        {cart.length > 0 ? (
                            cart.map(item => (
                                <div className="cartItem" key={item._id}>
                                    <div className="cartItemDetails">
                                        <h4>{item.heading}</h4>
                                        <p>Price: Rs {Number(item.price).toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <ul>
                                            {item.list.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="quantityControl">
                                            <button onClick={() => decrementQuantity(item._id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => incrementQuantity(item._id)}>+</button>
                                        </div>
                                    </div>
                                    <button className="removeItem" onClick={() => removeFromCart(item._id)}><MdDeleteForever/></button>
                                </div>
                            ))
                        ) : (
                            <p className='emptyCart'>Your cart is empty</p>
                        )}
                    </div>
                    <div className="summary">
                        <h3>Summary</h3>
                        <div className="summaryDetails">
                            <p>ITEMS {cart.length}</p>
                            <p>Total: Rs {Number(totalPrice.toFixed(2))}</p>
                            {/* <label>SHIPPING</label> */}
                            {/* <select>
                                <option>Cash On Delivery</option>
                                <option>Khalti</option>
                            </select> */}
                            <button className="checkoutBtn" onClick={handleCheckout}>Continue</button>
                            {/* <button className="checkoutBtn" onClick={handleCheckout}>PROCEED TO CHECKOUT</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
