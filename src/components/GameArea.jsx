import React from "react";

function GameArea({ selectedCountry, guessedLetters }) {
    // Split the country name by spaces
    const wordGroups = selectedCountry.split(" ");

    return (
        <div className="game-area">
            {wordGroups.map((word, index) => (
                <div key={index} className="word-group">
                    {word.split("").map((letter, idx) => (
                        <div
                            key={idx}
                            className={`letter-box ${guessedLetters.includes(letter) ? "revealed" : ""}`}
                        >
                            {guessedLetters.includes(letter) ? letter : ""}
                        </div>
                    ))}
                    {/* Add a space between word groups */}
                    <div className="letter-box space"></div>
                </div>
            ))}
            {/* Hidden input field to trigger keyboard on mobile devices */}
            <input
                type="text"
                className="hidden-input"
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: '0', height: '0' }}
                autoComplete="off"
                aria-hidden="true"
                onFocus={() => document.activeElement.blur()} // To prevent focusing on it
            />
        </div>
    );
}

export default GameArea;
