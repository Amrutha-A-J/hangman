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
        </div>
    );
}

export default GameArea;
