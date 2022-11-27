import React from 'react'
// import MonthPicker from '@mui/x-date-pickers/MonthPicker';

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


const Months = ({handleChangeMonth}) => {
    return (
        <div>
            <table className='months-table'>
                <tbody>
                    <tr>
                        <td onClick={handleChangeMonth}>Jan</td>
                        <td onClick={handleChangeMonth}>Feb</td>
                        <td onClick={handleChangeMonth}>Mar</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth}>Apr</td>
                        <td onClick={handleChangeMonth}>May</td>
                        <td onClick={handleChangeMonth}>Jun</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth}>Jul</td>
                        <td onClick={handleChangeMonth}>Aug</td>
                        <td onClick={handleChangeMonth}>Sep</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth}>Oct</td>
                        <td onClick={handleChangeMonth}>Nov</td>
                        <td onClick={handleChangeMonth}>Dec</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Months