import React from 'react'


const ToDoListItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.todo_txt}</td>
            <td>{item.todo_date_create}</td>
            <td>{item.todo_project}</td>
            <td>{item.todo_create_user}</td>
        </tr>
    )
}

const ToDoList = ({items}) => {
    return (
        <table className="table">
            <tr>
                <th>Id</th>
                <th>Text</th>
                <th>Create</th>
                <th>Project</th>
                <th>Creator</th>
            </tr>
            {items.map((item) => <ToDoListItem item={item} />)}
        </table>
    )
}

export default ToDoList