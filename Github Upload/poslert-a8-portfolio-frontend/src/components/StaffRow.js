import React from 'react';

function StaffRow({ employee }) {

    return(

        <tr>
            <td>
                <img src={employee.picture.thumbnail} alt="portrait" />
            </td>
            <td>
                <a href={"mailto:" + employee.email}>
                    {employee.name.first}&nbsp;
                    {employee.name.last}</a>
            </td>
            <td>{employee.phone}</td>
            <td>{employee.location.city}</td>
        </tr>
    )
}

export default StaffRow;