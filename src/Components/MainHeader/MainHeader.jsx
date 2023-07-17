import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import './MainHeader.styles.scss';

export default function MainHeader() {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
        </>
    )
}