import GAME_DIFFICULTY_ACTION_TYPES from './game-difficulty.types';
import { createAction } from '../reducer.utils';

export const setGameDifficulty = (gameDifficulty) =>
    createAction(GAME_DIFFICULTY_ACTION_TYPES.SET_CARD_COUNT, gameDifficulty);
