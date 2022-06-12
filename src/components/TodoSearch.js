import React from "react";
import "../assets/css/TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input 
        className="TodoSearch" 
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}
    export {TodoSearch};