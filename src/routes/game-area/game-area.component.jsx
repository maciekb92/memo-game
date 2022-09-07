import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../../store/cards/cards.action';
import { selectGameDifficulty } from '../../store/game-difficulty/game-difficulty.selector';
import CardsDirectory from '../../components/cards-directory/cards-directory.component';
import { CARD_TYPE_CLASSES } from '../../components/single-card/single-card.component';
import { CARDS_DATA } from '../../cards-data';

const gameDifficulties = {
    easy: 6,
    medium: 8,
    hard: 10
};

const getRandomCards = (cardsCount) => {
    return CARDS_DATA
        .sort(() => 0.5 - Math.random())
        .slice(0, cardsCount);
};

const getCopiedCards = (cardsToCopy) => {
    const copiedCards = cardsToCopy.map((card) => {
        return { ...card, id: card.id + 10 };
    });
    return copiedCards;
};

const getCardsCount = (gameDifficulty) => gameDifficulties[gameDifficulty];

const GameArea = () => {
    const dispatch = useDispatch();
    const gameDifficulty = useSelector(selectGameDifficulty);
    const cardsCount = getCardsCount(gameDifficulty);
    const randomCards = getRandomCards(cardsCount);
    const copiedCards = getCopiedCards(randomCards);
    const cards = [...randomCards.concat(copiedCards)];

    useEffect(() => {
        dispatch(setCards(cards));
    }, []);

    return (
        <Fragment>
            <CardsDirectory
                cardType={CARD_TYPE_CLASSES[gameDifficulty]}
            />
        </Fragment>
    );
};

export default GameArea;
