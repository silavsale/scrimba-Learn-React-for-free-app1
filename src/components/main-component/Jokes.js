import React from 'react';

const Jokes = (props) => {
    return (
        <div className="Jokes">
            <p>{props.joke}</p>
            <p>{props.punchline}</p>
        </div>
    )
};
export default Jokes;
