import { Fragment } from 'react';
import './footer.styles.scss';

const Footer = () => {
    return (
        <Fragment>
            <p>Created by Maciej Bojek</p>
            <a href='https://github.com/maciekb92/memo-game' target='_blank'>
                <i className='fa fa-github' />
            </a>
        </Fragment>
    );
};

export default Footer;
