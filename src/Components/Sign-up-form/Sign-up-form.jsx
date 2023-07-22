import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/firebase/firebase.utils";

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
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //confirm if the password matches
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // need to see if we authenticated that user with email and password
    try {
        const {user} =  await createAuthUserWithEmailAndPassword(email, password);

        await createUserDocumentFromAuth(user, { displayName })
        resetFormFields();
        // if succeeded we figure out what to do to confirm to them that they successfully signed up
    } catch (error) {
      if (error.code === 'auth/email-already-in-use' ) {
          alert(' Cannot create user, email already in use');
      } else console.log('User creation encountered an error', error)
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Display Name</label>
        <input
          id="name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
