import './button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    start: 'start',
    restart: 'restart',
    difficultyEasy: 'difficulty-easy',
    difficultyMedium: 'difficulty-medium',
    difficultyHard: 'difficulty-hard',
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${buttonType}`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
