import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards } from '../../store/cards/cards.selector';
import { setPrevImagePath } from '../../store/cards/cards.action';
import './single-card.styles.scss';

export const CARD_TYPE_CLASSES = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard'
};

const SingleCard = ({ card }) => {
    const { name, imagePath, emptyImagePath, prevImagePath } = card;
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    const prevImagePathHandler = () => {
        const newPrevImagePath = prevImagePath === imagePath ? emptyImagePath : imagePath;
        dispatch(setPrevImagePath(cards, card, newPrevImagePath));
    }

    return (
        <Fragment>
            <img className='single-card-container'
                src={prevImagePath}
                alt={`${name}`}
                onClick={prevImagePathHandler}
            />
        </Fragment>
    );
}

export default SingleCard;
