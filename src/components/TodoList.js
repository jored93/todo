import React from "react";

function TodoList(props) {
    return (
        <div className="container">
            <section>
                <ul>
                    {props.children}
                </ul>
            </section>
        </div>
    )}

    export {TodoList};