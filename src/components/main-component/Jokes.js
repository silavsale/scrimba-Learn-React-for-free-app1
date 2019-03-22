import React from 'react';

const Jokes = (props) => {
    return (
        <div className="Jokes">
            <p><i>Question: </i> {props.joke}</p>
            <p><i>Answer: </i> {props.punchline}</p>
        </div>
    )
};
export default Jokes;
