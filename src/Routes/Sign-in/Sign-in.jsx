import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";

import SignUpForm from "../../Components/Sign-up-form/Sign-up-form";

export default function SignIn() {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
}
