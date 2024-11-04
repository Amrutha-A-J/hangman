import React from 'react';

const GameArea = ({ selectedCountry, guessedLetters }) => {
    return (
        <div className="game-area">
            {selectedCountry.split('').map((letter, index) => (
                <div key={index} className="letter-box">
                    {guessedLetters.includes(letter) ? letter : "__"}
                </div>
            ))}
        </div>
    );
};

export default GameArea;
