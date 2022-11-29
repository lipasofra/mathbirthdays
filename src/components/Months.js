import React from 'react'


const Months = ({handleChangeMonth}) => {
    return (
        <div className="table-responsive">
            <table id="months-table" className="table table-bordered">
                <tbody>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={0}>Jan</td>
                        <td onClick={handleChangeMonth} data-value={1}>Feb</td>
                        <td onClick={handleChangeMonth} data-value={2}>Mar</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={3}>Apr</td>
                        <td onClick={handleChangeMonth} data-value={4}>May</td>
                        <td onClick={handleChangeMonth} data-value={5}>Jun</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={6}>Jul</td>
                        <td onClick={handleChangeMonth} data-value={7}>Aug</td>
                        <td onClick={handleChangeMonth} data-value={8}>Sep</td>
                    </tr>
                    <tr>
                        <td onClick={handleChangeMonth} data-value={9}>Oct</td>
                        <td onClick={handleChangeMonth} data-value={10}>Nov</td>
                        <td onClick={handleChangeMonth} data-value={11}>Dec</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Months