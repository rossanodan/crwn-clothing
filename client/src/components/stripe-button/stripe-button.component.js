import React from "react";
import Axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Mv18VocJjKAMUBqAPLQ88OLi00xRSau8Bj";
  const onToken = (token) => {
    Axios.post("/payment", {
      token,
      amount: priceForStripe,
    })
      .then((reponse) => {
        console.log(reponse);
        alert("Payment successful!");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert("There was an issue with your payment.");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
