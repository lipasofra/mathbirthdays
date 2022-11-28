import React from 'react'
import bootstrap from 'bootstrap'
// import MonthPicker from '@mui/x-date-pickers/MonthPicker';

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


const Months = ({handleChangeMonth}) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={1}>Jan</td>
                        <td onClick={handleChangeMonth} data-value={2}>Feb</td>
                        <td onClick={handleChangeMonth} data-value={3}>Mar</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={4}>Apr</td>
                        <td onClick={handleChangeMonth} data-value={5}>May</td>
                        <td onClick={handleChangeMonth} data-value={6}>Jun</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={7}>Jul</td>
                        <td onClick={handleChangeMonth} data-value={8}>Aug</td>
                        <td onClick={handleChangeMonth} data-value={9}>Sep</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={10}>Oct</td>
                        <td onClick={handleChangeMonth} data-value={11}>Nov</td>
                        <td onClick={handleChangeMonth} data-value={12}>Dec</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Months