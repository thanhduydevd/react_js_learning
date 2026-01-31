import { useState } from "react"

function ToDoList() {
    
    return (
        <>
            <header style={{ background: "green", padding: "5px" }}>
                <h5>Bài 3: To Do List</h5>
            </header>
            <input type="text" placeholder="Thêm công việc" />
            <button>Thêm</button>
            <ul>
                <li>Công việc 1: Học bài</li>
            </ul>
        </>
    )
}

export default ToDoList