import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCards, setCurrentImagePath } from '../../store/cards/cards.action';
import { selectEmptyImagePath, selectCards } from '../../store/cards/cards.selector';
import { selectGameDifficulty } from '../../store/game-difficulty/game-difficulty.selector';
import { selectCounterValue } from '../../store/counter/counter.selector';
import { setCounterValue } from '../../store/counter/counter.action';
import CardsDirectory from '../../components/cards-directory/cards-directory.component';
import Counter from '../../components/counter/counter.component';
import BackButton from '../../components/back-button/back-button.component';
import { CARD_TYPE_CLASSES } from '../../components/single-card/single-card.component';
import { CARDS_DATA } from '../../cards-data';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';
import VictoryMessage from '../../components/victory-message/victory-message.component';
import './game-area.component.styles.scss';

const gameDifficulties = {
  easy: 6,
  medium: 8,
  hard: 10,
};

const GameArea = () => {
  const dispatch = useDispatch();
  const emptyImagePath = useSelector(selectEmptyImagePath);
  const gameDifficulty = useSelector(selectGameDifficulty);
  const currentCards = useSelector(selectCards);
  const currentCounterValue = useSelector(selectCounterValue);
  const isVictory = currentCards.filter(card =>
    card.currentImagePath === emptyImagePath
  );

  const getRandomCards = (cardsCount) =>
    CARDS_DATA.sort(() => 0.5 - Math.random())
      .filter((card) => card.id !== 0)
      .slice(0, cardsCount);

  const getCopiedCards = (cardsToCopy) =>
    cardsToCopy.map((card) => ({
      ...card,
      id: card.id + 10,
    }));

  const getShuffledCards = (cards) =>
    cards.sort(() => 0.5 - Math.random());

  const getCardsCount = (gameDifficulty) =>
    gameDifficulties[gameDifficulty];

  const startNewGame = async () => {
    const cardsCount = getCardsCount(gameDifficulty);
    const randomCards = getRandomCards(cardsCount);
    const copiedCards = getCopiedCards(randomCards);
    const cardsToShuffle = [...randomCards.concat(copiedCards)];
    const shuffledCards = await getShuffledCards(cardsToShuffle);
    const initialCounterValue = 0;

    dispatch(setCards(shuffledCards));
    dispatch(setCurrentImagePath(cardsToShuffle, shuffledCards, emptyImagePath));
    dispatch(setCounterValue(initialCounterValue));
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className={`game-area-container ${CARD_TYPE_CLASSES[gameDifficulty]}`}>
      {isVictory.length ? (
        <Fragment>
          <div className='top-panel'>
            <BackButton />
            <Counter />
          </div>
          <CardsDirectory />
          <Button
            buttonType={BUTTON_TYPE_CLASSES.restart}
            type='button'
            onClick={startNewGame}
          >
            Restart Game
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <VictoryMessage
            currentCounterValue={currentCounterValue + 1}
          />
          <Button
            buttonType={BUTTON_TYPE_CLASSES.restart}
            type='button'
            onClick={startNewGame}
          >
            Restart Game
          </Button>
        </Fragment>
      )}
    </div >
  );
};

export default GameArea;
