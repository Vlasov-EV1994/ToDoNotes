import React from 'react'


const ProjectItem = ({item}) => {
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
        </tr>
    )
}

const ProjectList = ({items}) => {
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
            {items.map((item) => <ProjectItem item={item} />)}
        </table>
    )
}
export default ProjectList