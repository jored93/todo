import React from "react";
import '../assets/css/TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

    export {TodoCounter};