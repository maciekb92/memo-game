import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import CardsDirectory from '../../components/cards-directory/cards-directory.component';

import './menu.styles.scss';

const Menu = () => {
  const navigate = useNavigate();
  const goToGameAreaHandler = () => {
    navigate('/game-area');
  }

  return (
    <div className='menu-container'>
      <h1>Memo Game</h1>
      <CardsDirectory
        cardsCount={4}
        cardsEmpty={false}
      />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.start}
        type='button'
        onClick={goToGameAreaHandler}
      >
        Start Game
      </Button>
    </div>
  );
};

export default Menu;
