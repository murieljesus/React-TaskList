import React from "react"
import './TaskItem';
export { TaskItem }
function TaskItem(prop) {
    return(
    <li className="TaskList">
        <span>C</span>
            <p> {prop.text} </p>
            <span>X</span>
    </li>
    )
}