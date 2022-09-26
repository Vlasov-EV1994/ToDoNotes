import React from 'react'


const ProjectItem = ({item, delete_project}) => {
    return (
        <tr>
            <td>
                {item.id}
            </td>
            <td>
                {item.project_name}
            </td>
            <td>
                {item.project_addres}
            </td>
            <td>
                <td><button onClick={()=>delete_project(item.id)} type='button'>Delete</button></td>
            </td>
        </tr>
    )
}

const ProjectList = ({items, delete_project}) => {
    return (
        <table>
            <th>
                id
            </th>
            <th>
                Project name
            </th>
            <th>
                Project addres
            </th>
            {items.map((item) => <ProjectItem item={item} delete_project={delete_project}/>)}
        </table>
    )
}
export default ProjectList