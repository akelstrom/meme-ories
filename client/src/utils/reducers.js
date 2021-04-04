import {
    // ACTIONS HERE
    TOGGLE_RULES
} from './actions';

const initialState = {
    rulesOpen: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RULES:
            return {
                ...state,
                rulesOpen: !state.rulesOpen
            };
        
        default:
            return state;
    }
};

export default reducer;