import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCards,
    selectEmptyImagePath,
} from '../../store/cards/cards.selector';
import { selectCounterValue } from '../../store/counter/counter.selector';
import {
    setCurrentImagePath,
    setIsCardDisabled,
    setIsRotationDisabled,
} from '../../store/cards/cards.action';
import { setCounterValue } from '../../store/counter/counter.action';
import SingleCard from '../single-card/single-card.component';
import './cards-directory.styles.scss';

const CardsDirectory = ({ cardType }) => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);
    const counterValue = useSelector(selectCounterValue);
    const emptyImagePath = useSelector(selectEmptyImagePath);
    const cardsToCompare = cards.filter(
        (card) => card.currentImagePath === card.imagePath && !card.isCardDisabled
    );
    const isRotationDisabled = true;
    const defaultTimeout = 1000;

    const toggleEmptyImagePath = (cardsToSetEmptyImagePath) =>
        setTimeout(() => {
            dispatch(
                setCurrentImagePath(cards, cardsToSetEmptyImagePath, emptyImagePath)
            );
        }, defaultTimeout);

    const toggleIsCardDisabled = (cardsToDisable) =>
        dispatch(setIsCardDisabled(cards, cardsToDisable));

    const toggleCounterValue = () => {
        const increasedCounterValue = counterValue + 1;
        setTimeout(() => {
            dispatch(setCounterValue(increasedCounterValue));
        }, defaultTimeout);
    };

    const toggleIsRotationDisabled = () =>
        dispatch(setIsRotationDisabled(isRotationDisabled));

    const toggleIsRotationEnabled = () => setTimeout(() => {
        dispatch(setIsRotationDisabled(!isRotationDisabled));
    }, defaultTimeout);

    const compareCards = () => {
        cardsToCompare.reduce((prevCard, currentCard) =>
            prevCard.imagePath !== currentCard.imagePath
                ? toggleEmptyImagePath(cardsToCompare)
                : toggleIsCardDisabled(cardsToCompare)
        );
    };

    useEffect(() => {
        if (cardsToCompare.length < 2) return;

        toggleIsRotationDisabled();
        compareCards();
        toggleIsRotationEnabled();
        toggleCounterValue();
    });

    return (
        <div className={`cards-directory-container ${cardType}`}>
            {cards.map((card) => (
                <SingleCard key={card.id} card={card} />
            ))}
        </div>
    );
};

export default CardsDirectory;
