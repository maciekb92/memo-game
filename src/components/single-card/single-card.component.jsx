import './single-card.styles.scss';
import { CARDS_DATA } from '../../cards-data';
import { Fragment } from 'react';

const SingleCard = ({ card, isCardEmpty }) => {
    const { name, imagePath } = card;
    const emptyCardImagePath = CARDS_DATA[0].imagePath;

    return (
        <Fragment>
            <img className='single-card-container' src={isCardEmpty ? emptyCardImagePath : imagePath} alt={`${name}`} />
        </Fragment>
    );
}

export default SingleCard;
