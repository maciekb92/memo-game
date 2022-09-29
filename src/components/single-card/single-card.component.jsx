import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCards,
  selectIsCardRotationDisabled,
} from '../../store/cards/cards.selector';
import { setCurrentImagePath } from '../../store/cards/cards.action';
import './single-card.styles.scss';

export const CARD_TYPE_CLASSES = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

const SingleCard = ({ card }) => {
  const { name, imagePath, currentImagePath } = card;
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const isCardRotationDisabled = useSelector(selectIsCardRotationDisabled);
  const toggleImagePath = () =>
    dispatch(setCurrentImagePath(cards, [card], imagePath));

  const currentImagePathHandler = () => {
    if (!isCardRotationDisabled) toggleImagePath();
  };

  return (
    <Fragment>
      <img
        className={`single-card-container ${
          currentImagePath === imagePath ? 'unhidden' : 'hidden'
        }`}
        src={currentImagePath}
        alt={`${name}`}
        onClick={currentImagePathHandler}
      />
    </Fragment>
  );
};

export default SingleCard;
