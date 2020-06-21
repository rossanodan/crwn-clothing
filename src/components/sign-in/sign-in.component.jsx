import React from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../button/button.component";
import {
  GoogleSignInStart,
  EmailSignInStart,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { EmailSignInStart } = this.props;
    const { email, password } = this.state;

    EmailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { GoogleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  GoogleSignInStart: () => dispatch(GoogleSignInStart()),
  EmailSignInStart: (email, password) =>
    dispatch(EmailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
