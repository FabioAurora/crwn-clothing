import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import './CartDropdown.styles.scss';
import Button from '../Button/Button';

import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckoutHandler
            }>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;