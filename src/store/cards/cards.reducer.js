import CARDS_ACTION_TYPES from './cards.types';

const INITIAL_STATE = {
    cards: []
};

export const cardsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CARDS_ACTION_TYPES.SET_CARDS:
            return {
                ...state,
                cards: payload
            };
        case CARDS_ACTION_TYPES.SET_PREV_IMAGE_PATH:
            return {
                ...state,
                cards: payload
            }
        default:
            return state;
    }
}; 
