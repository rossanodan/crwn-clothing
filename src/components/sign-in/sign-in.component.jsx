import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../button/button.component";
import {
  GoogleSignInStart,
  EmailSignInStart,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SignIn = ({ EmailSignInStart, GoogleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    EmailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button type="button" isGoogleSignIn onClick={GoogleSignInStart}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  GoogleSignInStart: () => dispatch(GoogleSignInStart()),
  EmailSignInStart: (email, password) =>
    dispatch(EmailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
