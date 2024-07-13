import React from 'react';

export function Title({ text, title, onClick }) {

    return (
        <div className="title" id={title} onClick={onClick}>
            {text.split(" ").map(word => <span key={word + String(Math.floor(Math.random() * 101))}>{word}</span>)}
        </div>
    );
}
