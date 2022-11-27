import React from 'react'

let months = ["enero", "febrero"]


const Months = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4"></th>
                    </tr>
                </thead>
                <tbody>{months}</tbody>
            </table>
        </div>
    )
}

export default Months