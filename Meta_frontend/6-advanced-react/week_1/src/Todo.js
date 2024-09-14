import React from 'react'

const Todo = props => 
    <tr>
        <td>
            <label>{props.id}</label>
        </td>

        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>

export default Todo;
