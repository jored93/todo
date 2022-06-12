import React from "react";
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from "./TodoContext";
import { TodoList } from "./components/TodoList";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { Modal } from "./components/ModalCreateTodo";
import { TodoForm } from "./components/TodoForm";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
            <TodoList>
                {error && <p>{error}</p>}
                {loading && <div className="loader"></div>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                
                {searchedTodos.map(todo => (
                    <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
                </TodoList>
                {!!openModal && ( 
                <Modal>
                    <TodoForm />
                </Modal>)}
        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export { AppUI };