import React from 'react'
import Select from 'react-select'


const Days = (props) => {

    return (
        <div style={{width: 'fit-content', margin:'0 auto'}}>
            <Select
                onChange = {props.handleChangeDay}
                placeholder = "Day"
                options = {props.optionsDays}
            />              
        </div>
    )
}

export default Days