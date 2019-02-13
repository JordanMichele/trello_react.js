import React from 'react';

import './card.css';

export default function Card() {
    const text  = ['Jordan', 'Erin', 'Sean', 'Casey', 'Whitney', 'Linda', 'Mark', 'Brian'];
    return (
        <div className="card">
            {text[Math.floor(Math.random() * text.length)]}
        </div>
    );
};
