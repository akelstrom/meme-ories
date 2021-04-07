import {
    // ACTIONS HERE
    TOGGLE_RULES,
    UPDATE_POINTS
} from './actions';

const initialState = {
    rulesOpen: false,
    points: 0,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RULES:
            return {
                ...state,
                rulesOpen: !state.rulesOpen
            };
        
        case UPDATE_POINTS:
            return {
                ...state,
                UPDATE_POINTS: [...state.points, action.points]
            }
        
        default:
            return state;
    }
};

export default reducer;