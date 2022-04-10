import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = "review/loadReviews";
const ADD_REVIEW = "review/addReview";
const EDIT_REVIEW = "review/editReview";
const DELETE_REVIEW = "review/deleteReview";
const UPDATE_CURRENT_REVIEW = "review/updatecurrentReviewId";

export const loadReviews = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    payload: reviews,
  };
};

export const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    payload: review,
  };
};

export const editReview = (review) => {
  return {
    type: EDIT_REVIEW,
    payload: review,
  };
};

export const deleteReview = (review) => {
  return {
    type: DELETE_REVIEW,
    payload: review,
  };
};

export const updateCurrentReviewId = (review) => {
  return {
    type: UPDATE_CURRENT_REVIEW,
    payload: review,
  };
};

export const writeReview = (payload) => async (dispatch) => {
  const response = await csrfFetch("/api/reviews/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const review = await response.json();
    dispatch(addReview(review.data));
    return review;
  } else {
    const error = await response.json();
    return error;
  }
};

export const updateReview = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${payload.reviewId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const review = await response.json();
    dispatch(editReview(review));
    return review;
  } else {
    const error = await response.json();
    return error;
  }
};

export const removeReview = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/delete/${payload.id}`, {
    method: "DELETE",
  });
  dispatch(deleteReview(payload));
  return response;
};

export const fetchReviews = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");
  const reviews = await response.json();
  dispatch(loadReviews(reviews));
};

const initialState = {
  reviews: {},
  isLoading: true,
  currentReviewId: {},
};

const reviewReducer = (state = initialState, action) => {
  let reviews = {};
  let newState = {};
  switch (action.type) {
    case LOAD_REVIEWS:
      let loadedReviews = [];
      action.payload.forEach((review) => (loadedReviews[review.id] = review));
      newState.reviews = reviews;
      return {
        ...state,
        reviews: loadedReviews,
      };
    case ADD_REVIEW:
      reviews = { ...state.reviews };
      reviews[action.payload.id] = action.payload;
      return {
        ...state,
        reviews,
      };
    case UPDATE_CURRENT_REVIEW:
      return {
        ...state,
        currentReviewId: action.payload,
      };
    case EDIT_REVIEW:
      reviews = { ...state.reviews };
      reviews[action.payload.id] = action.payload;
      return {
        ...state,
        reviews,
      };
    case DELETE_REVIEW:
      newState = { ...state };
      newState.payload = null;
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
