import React, { useState, useEffect } from 'react';

export const TimeFound = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage(true);
        }, 1200);

        return () => clearTimeout(timerId);
    }, 1200);

    return showMessage ? <div className='not-found'>{`Нет результатов!:(`}</div> : null;
};