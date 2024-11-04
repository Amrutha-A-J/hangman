import React from 'react';

const HangmanSVG = ({ errors }) => {
    return (
        <svg className="svg-area" width="290" height="400" viewBox="0 0 50 50">
            <g id="pole">
                <line x1="15" y1="50" x2="50" y2="50" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 2 }} />
                <line x1="45" y1="50" x2="45" y2="5" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 1 }} />
                <line x1="45" y1="5" x2="28" y2="5" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 1 }} />
                <line x1="28" y1="5" x2="28" y2="10" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 1 }} />
            </g>
            {errors.length > 0 && (
                <g id="head">
                    <circle cx="28" cy="13" r="3" style={{ strokeWidth: 0.5, fill: 'none', stroke: 'rgb(255,0,0)' }} />
                </g>
            )}
            {errors.length > 1 && (
                <g id="hbody">
                    <line x1="28" y1="16" x2="28" y2="28" style={{ strokeWidth: 0.5, stroke: 'rgb(255,0,0)' }} />
                </g>
            )}
            {errors.length > 2 && (
                <g id="lhand">
                    <line x1="28" y1="20" x2="23" y2="17" style={{ strokeWidth: 0.5, stroke: 'rgb(255,0,0)' }} />
                </g>
            )}
            {errors.length > 3 && (
                <g id="rhand">
                    <line x1="28" y1="20" x2="33" y2="17" style={{ strokeWidth: 0.5, stroke: 'rgb(255,0,0)' }} />
                </g>
            )}
            {errors.length > 4 && (
                <g id="lleg">
                    <line x1="28" y1="28" x2="23" y2="32" style={{ strokeWidth: 0.5, stroke: 'rgb(255,0,0)' }} />
                </g>
            )}
            {errors.length > 5 && (
                <g id="rleg">
                    <line x1="28" y1="28" x2="33" y2="32" style={{ strokeWidth: 0.5, stroke: 'rgb(255,0,0)' }} />
                    <line x1="26" y1="12" x2="27" y2="13" style={{ strokeWidth: 0.2 }} />
                    <line x1="29" y1="12" x2="30" y2="13" style={{ strokeWidth: 0.2 }} />
                    <line x1="27" y1="12" x2="26" y2="13" style={{ strokeWidth: 0.2 }} />
                    <line x1="30" y1="12" x2="29" y2="13" style={{ strokeWidth: 0.2 }} />
                    <circle cx="28" cy="14" r="0.5" style={{ strokeWidth: 0.5 }} />
                </g>
            )}
        </svg>
    );
};

export default HangmanSVG;