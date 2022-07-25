import React from 'react'

function List({ todoList, handleComplete, status, removeItem }) {
    return (
        <div>
            <ul className="todo-list">
                {/* List all todos */}
            
                {todoList.map((item, idx) => (
                    <li key={idx} className={item.done ? "completed" : ""} 
                    hidden={status == "all" ? false : (status == "completed" && !item.done) ? true : status == "active" && item.done ? true : false}
                    >
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={item.done} onChange={() => handleComplete(idx)} />
                            <label>{item.todo}</label>
                            <button className="destroy" onClick={() => removeItem(idx)}></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List