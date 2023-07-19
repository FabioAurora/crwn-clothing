import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../Utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;



  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action="#" onSubmit={() =>{}}>
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
