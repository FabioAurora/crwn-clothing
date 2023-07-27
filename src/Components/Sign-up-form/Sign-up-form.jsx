import { useState } from "react";
import './Sign-up-form.styles.scss';

import FormInput from "../Form-input/Form-input";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";

import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //confirm if the password matches
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // need to see if we authenticated that user with email and password
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );



      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      // if succeeded we figure out what to do to confirm to them that they successfully signed up
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(" Cannot create user, email already in use");
      } else console.log("User creation encountered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="#" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          autoComplete='username'
          id='name'
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          autoComplete='on'
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          autoComplete='new-password'
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          autoComplete='new-password'
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button  type='submit'>Create Account</Button>
      </form>
    </div>
  );
}
