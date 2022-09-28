import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGameDifficulty } from "../../store/game-difficulty/game-difficulty.action";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import "./menu.styles.scss";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToGameAreaHandler = () => {
    navigate("/game-area");
  };
  const difficultyLevelHandler = (event) => {
    event.preventDefault();
    const gameDifficulty = event.target.innerText.toLowerCase();
    dispatch(setGameDifficulty(gameDifficulty));
  };

  return (
    <div className="menu-container">
      <h1>Memo Game</h1>
      <div className="difficulty-container">
        <h2>Select difficulty:</h2>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.difficultyEasy}
          type="button"
          onClick={difficultyLevelHandler}
        >
          Easy
        </Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.difficultyMedium}
          type="button"
          onClick={difficultyLevelHandler}
        >
          Medium
        </Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.difficultyHard}
          type="button"
          onClick={difficultyLevelHandler}
        >
          Hard
        </Button>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.start}
        type="button"
        onClick={goToGameAreaHandler}
      >
        Start Game
      </Button>
    </div>
  );
};

export default Menu;
