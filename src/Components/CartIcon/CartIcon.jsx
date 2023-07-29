import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import './CartIcon.styles.scss';
import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';

export default function CartIcon() {
    const { isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}