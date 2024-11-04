import React from 'react';

const Overlay = ({ restartGame, gameOver }) => {
    return (
        <div className={`overlay ${gameOver ? 'show' : ''}`}>
            {gameOver ? (
                <button onClick={restartGame}>Restart Game</button>
            ) : (
                <p>Guess the country! Each key press counts as an attempt.</p>
            )}
        </div>
    );
};

export default Overlay;
