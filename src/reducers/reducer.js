import { SET_PAGE } from "../actions/actions";

const initialState = {
  page: "home",
};

export const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
