import React from "react"
import Card from "react-bootstrap/Card";
import './TaskList.css'
export { TaskList }
function TaskList(prop) {
    return(
        <Card  className="TaskList">
            <Card.Body>
        <section>
            <ul>
                {prop.children}
            </ul>
        </section>
            </Card.Body>
        </Card>
    )
}