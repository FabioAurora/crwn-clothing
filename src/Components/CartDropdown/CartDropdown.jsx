import './CartDropdown.styles.scss';
import Button from '../Button/Button';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown;