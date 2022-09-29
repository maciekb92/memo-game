import GAME_DIFFICULTY_ACTION_TYPES from './game-difficulty.types';

const INITIAL_GAME_DIFFICULTY_STATE = {
    difficulty: 'easy',
};

export const gameDifficulty = (
    state = INITIAL_GAME_DIFFICULTY_STATE,
    action = {}
) => {
    const { type, payload } = action;

    switch (type) {
        case GAME_DIFFICULTY_ACTION_TYPES.SET_CARD_COUNT:
            return {
                ...state,
                difficulty: payload,
            };
        default:
            return state;
    }
};
