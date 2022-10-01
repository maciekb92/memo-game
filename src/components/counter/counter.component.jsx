import { useSelector } from 'react-redux';
import { selectCounterValue } from '../../store/counter/counter.selector';
import './counter.styles.scss';

const Counter = () => {
    const currentCounterValue = useSelector(selectCounterValue);

    return (
        <div className='counter-container'>
            <span className='counter-value'>{currentCounterValue}</span>
        </div>
    );
};

export default Counter;
