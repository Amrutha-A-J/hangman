import React from 'react';

const HangmanSVG = ({ errors }) => {
    return (
        <svg className="svg-area" width="60vw" height="400" viewBox="0 0 50 50">
            <g id="pole">
                <line x1="15" y1="50" x2="50" y2="50" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 2 }} />
                <line x1="45" y1="50" x2="45" y2="5" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 1 }} />
                <line x1="45" y1="5" x2="28" y2="5" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 1 }} />
                <line x1="28" y1="5" x2="28" y2="10" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 1 }} />
            </g>
            {errors.length > 0 && (
                <g id="head">
                    <circle className={`draw ${errors.length > 0 ? 'animate' : ''}`} cx="28" cy="13" r="3" />
                </g>
            )}
            {errors.length > 1 && (
                <g id="hbody">
                    <line className={`draw ${errors.length > 1 ? 'animate' : ''}`} x1="28" y1="16" x2="28" y2="28" />
                </g>
            )}
            {errors.length > 2 && (
                <g id="lhand">
                    <line className={`draw ${errors.length > 2 ? 'animate' : ''}`} x1="28" y1="20" x2="23" y2="17" />
                </g>
            )}
            {errors.length > 3 && (
                <g id="rhand">
                    <line className={`draw ${errors.length > 3 ? 'animate' : ''}`} x1="28" y1="20" x2="33" y2="17" />
                </g>
            )}
            {errors.length > 4 && (
                <g id="lleg">
                    <line className={`draw ${errors.length > 4 ? 'animate' : ''}`} x1="28" y1="28" x2="23" y2="32" />
                </g>
            )}
            {errors.length > 5 && (
                <g id="rleg">
                    <line className={`draw ${errors.length > 5 ? 'animate' : ''}`} x1="28" y1="28" x2="33" y2="32" />
                    <line className={`draw ${errors.length > 5 ? 'animate' : ''}`} x1="26" y1="12" x2="27" y2="13" />
                    <line className={`draw ${errors.length > 5 ? 'animate' : ''}`} x1="29" y1="12" x2="30" y2="13" />
                    <line className={`draw ${errors.length > 5 ? 'animate' : ''}`} x1="27" y1="12" x2="26" y2="13" />
                    <line className={`draw ${errors.length > 5 ? 'animate' : ''}`} x1="30" y1="12" x2="29" y2="13" />
                    <circle className={`draw ${errors.length > 5 ? 'animate' : ''}`} cx="28" cy="14" r="0.5" />
                </g>
            )}
        </svg>
    );
};

export default HangmanSVG;
