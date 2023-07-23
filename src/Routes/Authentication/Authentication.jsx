import SignUpForm from "../../Components/Sign-up-form/Sign-up-form";
import SignInForm from "../../Components/Sign-in-form/Sign-in-form";
import './authentication.styles.scss';

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
