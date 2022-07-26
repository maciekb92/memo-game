import { StartButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    start: 'start'
};

const getButton = (buttonType) => ({
    [BUTTON_TYPE_CLASSES.start]: StartButton
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
};

export default Button;