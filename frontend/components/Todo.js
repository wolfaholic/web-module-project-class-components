import React from 'react';


function Todo(props) {
    return (
        <div>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;