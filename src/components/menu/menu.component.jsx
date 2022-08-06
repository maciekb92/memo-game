import './menu.styles.scss';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CardsDirectory from '../cards-directory/cards-directory.component';

const Menu = () => {
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
      >
        Start Game
      </Button>
    </div>
  );
};

export default Menu;
