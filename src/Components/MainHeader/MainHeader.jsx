import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import "./MainHeader.styles.scss";
import { useContext } from "react";
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from "../../Utils/firebase/firebase.utils";

export default function MainHeader() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ?
            (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
            )
          }
        </div>
      </div>
    </>
  );
}