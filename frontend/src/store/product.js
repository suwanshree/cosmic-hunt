import { csrfFetch } from "./csrf";

const LOAD_PRODUCTS = "product/loadProducts";
const ADD_PRODUCT = "product/addProduct";
const EDIT_PRODUCT = "product/editProduct";
const DELETE_PRODUCT = "product/deleteProduct";
const UPDATE_CURRENT_PRODUCT = "product/updatecurrentProductId";

export const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};

export const updateCurrentProductId = (product) => {
  return {
    type: UPDATE_CURRENT_PRODUCT,
    payload: product,
  };
};

export const writeProduct = (payload) => async (dispatch) => {
  const response = await csrfFetch("/products/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const product = await response.json();
    dispatch(addProduct(product.data));
    return product;
  } else {
    const error = await response.json();
    return error;
  }
};

export const updateProduct = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/products/${payload.productId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const product = await response.json();
    dispatch(editProduct(product));
    return product;
  } else {
    const error = await response.json();
    return error;
  }
};

export const removeProduct = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/products/${payload.productId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const product = await response.json();
    dispatch(deleteProduct(product));
    return product;
  } else {
    const error = await response.json();
    return error;
  }
};

export const fetchProducts = () => async (dispatch) => {
  const response = await csrfFetch("/products");
  const products = await response.json();
  dispatch(loadProducts(products));
};

const initialState = {
  products: {},
  isLoading: true,
  currentProductId: {},
};

const productReducer = (state = initialState, action) => {
  let products = {};
  let newState = {};
  switch (action.type) {
    case LOAD_PRODUCTS:
      let loadedProducts = [];
      action.payload.forEach(
        (product) => (loadedProducts[product.id] = product)
      );
      newState.products = products;
      return {
        ...state,
        products: loadedProducts,
      };
    case ADD_PRODUCT:
      products = { ...state.products };
      products[action.payload.id] = action.payload;
      return {
        ...state,
        products,
      };
    case UPDATE_CURRENT_PRODUCT:
      return {
        ...state,
        currentProductId: action.payload,
      };
    case EDIT_PRODUCT:
      products = { ...state.products };
      products[action.payload.id] = action.payload;
      return {
        ...state,
        products,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload]: [...state.products[action.payload]].filter(
            (x, index) => index !== action.payload.id
          ),
        },
      };
    default:
      return state;
  }
};

export default productReducer;
