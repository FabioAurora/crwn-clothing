import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import './CartIcon.styles.scss';

export default function CartIcon() {

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}