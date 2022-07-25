import React from 'react'

function Footertop({ itemCount, handleStatus, handleClear }) {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemCount()}</strong>
                {itemCount() > 1 ? "items" : "item"} left
            </span>
            <ul className="filters">
                <li>
                    <a href="#/" onClick={() => handleStatus("all")}>All</a>
                </li>
                <li>
                    <a href="#/" onClick={() => handleStatus("active")}>Active</a>
                </li>
                <li>
                    <a href="#/" onClick={() => handleStatus("completed")}>Completed</a>
                </li>
            </ul>

            <button onClick={handleClear} className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Footertop