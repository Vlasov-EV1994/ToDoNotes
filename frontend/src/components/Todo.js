import React from 'react'


const ToDoListItem = ({item, delete_todo}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.todo_txt}</td>
            <td>{item.todo_date_create}</td>
            <td>{item.todo_project}</td>
            <td>{item.todo_create_user}</td>
            <td><button onClick={()=>delete_todo(item.id)} type='button'>Delete</button></td>
        </tr>
    )
}

const ToDoList = ({items, delete_todo}) => {
    return (
        <table className="table">
            <tr>
                <th>Id</th>
                <th>Text</th>
                <th>Create</th>
                <th>Project</th>
                <th>Creator</th>
            </tr>
            {items.map((item) => <ToDoListItem item={item} delete_todo={delete_todo}/>)}
        </table>
    )
}

export default ToDoList