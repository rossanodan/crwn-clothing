import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

// const mapStateToProps = (state) => ({});

// export default connect()(CartDropdown);
export default CartDropdown;
