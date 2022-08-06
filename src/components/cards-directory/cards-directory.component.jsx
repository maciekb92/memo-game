import { CARDS_DATA } from '../../cards-data';
import SingleCard from '../single-card/single-card.component';
import './cards-directory.styles.scss';

const getRandomCards = (cardsCount) => {
    return CARDS_DATA
        .filter((card) => card.id !== 0)
        .sort(() => 0.5 - Math.random())
        .slice(0, cardsCount);
};

const CardsDirectory = ({ cardsCount, cardsEmpty }) => {
    const randomCards = getRandomCards(cardsCount);

    return (
        <div className='cards-directory-container'>
            {randomCards.map((value) => (
                <SingleCard
                    key={value.id}
                    card={value}
                    isCardEmpty={cardsEmpty}
                />
            ))}
        </div>
    );
}

export default CardsDirectory;
