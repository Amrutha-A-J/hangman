import React from 'react';

const ErrorArea = ({ errors }) => {
    return (
        <div className="error-area">
            {errors.join(', ')}
        </div>
    );
};

export default ErrorArea;
