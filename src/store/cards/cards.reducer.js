import { CARDS_DATA } from "../../cards-data";
import CARDS_ACTION_TYPES from "./cards.types";

const INITIAL_STATE = {
    cards: [],
    emptyImagePath: CARDS_DATA[0].imagePath,
    isCardRotationDisabled: false,
};

export const cardsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CARDS_ACTION_TYPES.SET_CARDS:
            return {
                ...state,
                cards: payload,
            };
        case CARDS_ACTION_TYPES.SET_IS_CARD_ROTATION_DISABLED:
            return {
                ...state,
                isCardRotationDisabled: payload,
            };
        default:
            return state;
    }
};
