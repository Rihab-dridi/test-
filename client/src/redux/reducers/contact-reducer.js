import { GET_ALL } from "../action-types/contact-action-type";

const initialState = {
  contacts: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
