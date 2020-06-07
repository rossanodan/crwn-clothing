import ShopActionTypes from "./shop.types";

export const updateColletions = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
