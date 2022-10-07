import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import Button, {
    BUTTON_TYPE_CLASSES,
} from '../button/button.component';

const BackButton = () => {
    const navigate = useNavigate();

    const backButtonHandler = () => {
        navigate(-1);
    };

    return (
        <Fragment>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.back}
                type='button'
                onClick={backButtonHandler}
            >
                &#10006;
            </Button>
        </Fragment>
    );
};

export default BackButton;
