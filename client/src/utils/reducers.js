import {
    // ACTIONS HERE
    TOGGLE_RULES,
    ADD_FRIEND,
    UPDATE_USERS,
    UPDATE_FRIENDS
} from './actions';

const initialState = {
    rulesOpen: false,
    friends: [],
    users: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RULES:
            return {
                ...state,
                rulesOpen: !state.rulesOpen
            };
        
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.friend]
            };

        case UPDATE_FRIENDS:
            return {
                ...state,
                friends: [...action.friends]
            }

        case UPDATE_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        
        default:
            return state;
    }
};

export default reducer;