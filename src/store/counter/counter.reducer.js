import COUNTER_ACTION_TYPES from './counter.types';

const INITIAL_STATE = {
    counterValue: 0
};

export const counterReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case COUNTER_ACTION_TYPES.SET_COUNTER_VALUE:
            return {
                ...state,
                counterValue: payload
            };
        default:
            return state;
    } 
};
