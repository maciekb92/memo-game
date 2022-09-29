import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCards, setCurrentImagePath } from '../../store/cards/cards.action';
import { selectEmptyImagePath } from '../../store/cards/cards.selector';
import { selectGameDifficulty } from '../../store/game-difficulty/game-difficulty.selector';
import CardsDirectory from '../../components/cards-directory/cards-directory.component';
import { CARD_TYPE_CLASSES } from '../../components/single-card/single-card.component';
import { CARDS_DATA } from '../../cards-data';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

const gameDifficulties = {
  easy: 6,
  medium: 8,
  hard: 10,
};

const getRandomCards = (cardsCount) =>
  CARDS_DATA.sort(() => 0.5 - Math.random())
    .filter((card) => card.id !== 0)
    .slice(0, cardsCount);

const getCopiedCards = (cardsToCopy) =>
  cardsToCopy.map((card) => ({
    ...card,
    id: card.id + 10,
  }));

const getShuffledCards = (cards) => cards.sort(() => 0.5 - Math.random());

const getCardsCount = (gameDifficulty) => gameDifficulties[gameDifficulty];

const GameArea = () => {
  const dispatch = useDispatch();
  const emptyImagePath = useSelector(selectEmptyImagePath);
  const gameDifficulty = useSelector(selectGameDifficulty);
  const cardsCount = getCardsCount(gameDifficulty);
  const randomCards = getRandomCards(cardsCount);
  const copiedCards = getCopiedCards(randomCards);
  const cards = [...randomCards.concat(copiedCards)];
  const shuffledCards = getShuffledCards(cards);

  const startNewGame = () => {
    dispatch(setCards(shuffledCards));
    dispatch(setCurrentImagePath(cards, shuffledCards, emptyImagePath));
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className='game-area-container'>
      <CardsDirectory cardType={CARD_TYPE_CLASSES[gameDifficulty]} />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.restart}
        type='button'
        onClick={startNewGame}
      >
        Restart Game
      </Button>
    </div>
  );
};

export default GameArea;
