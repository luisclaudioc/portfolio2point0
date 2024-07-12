import React from 'react';

export function Title({ text }) {

    return (
        <div className="title">
            {text.split(" ").map(word => <span key={word}>{word}</span>)}
        </div>
    );
}
