import { csrfFetch } from "./csrf";

const LOAD_PRODUCTS = "product/loadProducts";
const ADD_PRODUCT = "product/addProduct";
const EDIT_PRODUCT = "product/editProduct";
const DELETE_PRODUCT = "product/deleteProduct";

export const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

export const writeProduct = (payload) => async (dispatch) => {
  const response = await csrfFetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const product = await response.json();
    dispatch(addProduct(product));
    return product;
  } else {
    const error = await response.json();
    return error;
  }
};

export const fetchProducts = () => async (dispatch) => {
  const response = await csrfFetch("/products");
  const products = await response.json();
  dispatch(loadProducts(products)); // updating the state
};

const initialState = { entries: {}, isLoading: true };

const productReducer = (state = initialState, action) => {
  let entries = {};
  let newState = {};

  switch (action.type) {
    case LOAD_PRODUCTS:
      newState = {};
      entries = {};
      action.products.forEach((product) => (entries[product.id] = product));
      newState.entries = entries;
      return newState;
    case ADD_PRODUCT:
      entries = { ...state.entries };
      entries[action.product.id] = action.product;
      state.entries = entries;
      return state;
    default:
      return state;
  }
};

export default productReducer;
