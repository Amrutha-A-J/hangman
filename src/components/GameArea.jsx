import React, { useRef } from "react";

function GameArea({ selectedCountry, guessedLetters }) {
    const hiddenInputRef = useRef(null);

    const handleFocus = () => {
        hiddenInputRef.current.focus();
    };

    // Split the country name by spaces
    const wordGroups = selectedCountry.split(" ");

    return (
        <div className="game-area" onClick={handleFocus}> {/* Add click handler to the game area */}
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

            <input
                ref={hiddenInputRef} // Attach the ref to the input
                type="text"
                className="hidden-input"
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: '0', height: '0' }}
                autoComplete="off"
                aria-hidden="true"
            />
        </div>
    );
}

export default GameArea;
