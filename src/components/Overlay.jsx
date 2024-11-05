import React from 'react';

const Overlay = ({ restartGame, gameOver, gameWon }) => {
    let message;
    console.log(gameOver, gameWon)
    if (gameWon) {
        message = (
            <div>
                <h1>Congratulations! You Won!</h1>
                <button onClick={restartGame}>Restart Game</button>
            </div>
        );
    } else if (gameOver) {
        message = (
            <div>
                <h1>Game Over</h1>
                <button onClick={restartGame}>Restart Game</button>
            </div>
        );
    }

    return (
        <div className={`overlay ${gameOver || gameWon ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default Overlay;
