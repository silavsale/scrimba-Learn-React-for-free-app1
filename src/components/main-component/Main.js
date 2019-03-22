import React from 'react';
import Todo from './Todo';
import "./Main.css"


function Main() {


    return (
        <div className="Main">
            <h1>This is a main component</h1>
            <ul>
                <li>Buy coffee</li>
                <li>Buy bread</li>
                <li>Buy eggs</li>
            </ul>
            <div className="todo-list">
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
            </div>
        </div>

    )
}

export default Main;
