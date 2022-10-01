import { combineReducers } from 'redux';
import { cardsReducer } from './cards/cards.reducer';
import { gameDifficultyReducer } from './game-difficulty/game-difficulty.reducer';
import { counterReducer } from './counter/counter.reducer';

export const rootReducer = combineReducers({
    cards: cardsReducer,
    gameDifficulty: gameDifficultyReducer,
    counter: counterReducer
});
