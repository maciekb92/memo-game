import CARDS_ACTION_TYPES from './cards.types';
import { createAction } from '../reducer.utils';

const updatePrevImagePath = (cards, cardToUpdate, prevImagePath) => {
    return cards.map((card) =>
        card.id === cardToUpdate.id
            ? { ...card, prevImagePath: prevImagePath }
            : card
    );
};

export const setCards = (cards) => createAction(CARDS_ACTION_TYPES.SET_CARDS, cards);
export const setPrevImagePath = (cards, cardToUpdate, prevImagePath) => {
    const newCard = updatePrevImagePath(cards, cardToUpdate, prevImagePath);
    return createAction(CARDS_ACTION_TYPES.SET_PREV_IMAGE_PATH, newCard);
};
