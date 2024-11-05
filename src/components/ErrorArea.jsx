import React from 'react';

const ErrorArea = ({ errors }) => {
    return (
        <div className="error-area">
            {errors.map((error, index) => (
                <span key={index} className="wrong">
                    {error}
                </span>
            ))}
        </div>
    );
};

export default ErrorArea;
