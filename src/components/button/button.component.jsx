import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
    start: "start",
    difficultyEasy: "difficulty-easy",
    difficultyMedium: "difficulty-medium",
    difficultyHard: "difficulty-hard",
};

const Button = ({ children, buttonType, ...otherProps }) => {
    console.log();
    return (
        <button className={`button-container ${buttonType}`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
