import { combineReducers } from 'redux';
import { cardsReducer } from './cards/cards.reducer';
import { gameDifficulty } from './game-difficulty/game-difficulty.reducer';

export const rootReducer = combineReducers({
    cards: cardsReducer,
    gameDifficulty: gameDifficulty
});
