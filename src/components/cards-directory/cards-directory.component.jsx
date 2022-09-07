import { useSelector } from 'react-redux';
import { selectCards } from '../../store/cards/cards.selector';
import SingleCard from '../single-card/single-card.component';
import './cards-directory.styles.scss';

const CardsDirectory = ({ cardType }) => {
    const cards = useSelector(selectCards);

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
