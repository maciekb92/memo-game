import CARDS_ACTION_TYPES from './cards.types';
import { createAction } from '../reducer.utils';

const updateCurrentImagePath = (cards, cardsToUpdate, currentImagePath) => {
    return cards.map((card) => {
        const existingCard = cardsToUpdate.find(cardToUpdate =>
            cardToUpdate.id == card.id
        );

        return existingCard !== undefined
            ? { ...card, currentImagePath: currentImagePath }
            : card;
    });
};

const updateIsCardDisabled = (cards, cardsToUpdate) => {
    return cards.map((card) => {
        const existingCard = cardsToUpdate.find(cardToUpdate =>
            cardToUpdate.id == card.id
        );

        return existingCard !== undefined
            ? { ...card, isCardDisabled: true }
            : card;
    });
};

export const setCards = (cards) =>
    createAction(CARDS_ACTION_TYPES.SET_CARDS, cards);

export const setCurrentImagePath = (cards, cardsToUpdate, currentImagePath) => {
    const newCards = updateCurrentImagePath(cards, cardsToUpdate, currentImagePath);
    return createAction(CARDS_ACTION_TYPES.SET_CARDS, newCards);
};

export const setIsCardDisabled = (cards, cardsToUpdate) => {
    const newCards = updateIsCardDisabled(cards, cardsToUpdate);
    return createAction(CARDS_ACTION_TYPES.SET_CARDS, newCards);
};

export const setIsRotationDisabled = (isRotationDisabled) =>
    createAction(CARDS_ACTION_TYPES.SET_IS_CARD_ROTATION_DISABLED, isRotationDisabled);
