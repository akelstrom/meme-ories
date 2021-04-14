import { UPDATE_USERS, UPDATE_FRIENDS, UPDATE_SCORE } from "./actions";

const initialState = {
  friends: [],
  users: [],
  score: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FRIENDS:
      return {
        ...state,
        friends: [...action.friends],
      };

    case UPDATE_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case UPDATE_SCORE:
      return {
        ...state,
        score: [action.score],
      };

    default:
      return state;
  }
};

export default reducer;
