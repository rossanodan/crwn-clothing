import React from "react";

import SHOPDATA from "./shop.data.js";

import CollectioPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOPDATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => (
          <CollectioPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
