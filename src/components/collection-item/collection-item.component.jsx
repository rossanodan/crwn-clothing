import React from "react";
import { connect } from "react-redux";

import Button from "../button/button.component";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="image"
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
