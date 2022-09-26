import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCards } from '../../store/cards/cards.selector';
import { setCurrentImagePath, setIsCardDisabled, setIsRotationDisabled } from '../../store/cards/cards.action';
import SingleCard from '../single-card/single-card.component';
import './cards-directory.styles.scss';

const CardsDirectory = ({ cardType }) => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);
    const cardsToCompare = cards.filter(card =>
        card.currentImagePath === card.imagePath && !card.isCardDisabled
    );
    const isRotationDisabled = true;
    const toggleEmptyImagePath = (cardsToSetEmptyImagePath, emptyImagePath) => setTimeout(() => {
        dispatch(setCurrentImagePath(cards, cardsToSetEmptyImagePath, emptyImagePath))
    }, 1000);
    const toggleIsCardDisabled = (cardsToDisable) => dispatch(setIsCardDisabled(cards, cardsToDisable));

    useEffect(() => {
        if (cardsToCompare.length < 2) return;

        dispatch(setIsRotationDisabled(isRotationDisabled));

        cardsToCompare.reduce((prevCard, currentCard) =>
            prevCard.imagePath !== currentCard.imagePath
                ? toggleEmptyImagePath(cardsToCompare, currentCard.emptyImagePath)
                : toggleIsCardDisabled(cardsToCompare)
        );

        setTimeout(() => {
            dispatch(setIsRotationDisabled(!isRotationDisabled))
        }, 1000);
    });

    return (
        <div className={`cards-directory-container ${cardType}`}>
            {cards.map((card) => (
                <SingleCard
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    );
}

export default CardsDirectory;
