import React from 'react';

export function Title({ text, title, onClick }) {

    return (
        <div className="title" id={title} onClick={onClick}>
            {text.split(" ").map((word, index) => <span key={index}>{word}</span>)}
        </div>
    );
}
