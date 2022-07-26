import { MenuContainer } from './menu.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const Menu = () => {
  return (
    <MenuContainer>
      <h1>Memo Game</h1>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.start}
        type='button'
      >
        Start Game
      </Button>
    </MenuContainer>
  );
};

export default Menu;
