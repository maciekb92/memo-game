import './victory-message.styles.scss';

const VictoryMessage = ({ currentCounterValue }) => {
    return (
        <div className='victory-message-container'>
            <h1>YOU ARE A WINNER!</h1>
            <p>YOUR SCORE: {currentCounterValue}</p>
        </div>
    );
};

export default VictoryMessage;
