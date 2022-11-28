import React from 'react'
import _range from "lodash/range"
import Picker from 'react-scrollable-picker'
import Select from 'react-select'


let optionsYears = _range(1910,2023).map(i => {
    return {
    value: i, 
    label: i
    }
})

const Years = (props) => {

    let optionGroups = {year: optionsYears}
    
    let valueGroups = {year: props.year || 2000}


    return (
        <div>
            {/* <Select
                onChange = {props.handleChangeYear}
                placeholder = "Year"
                defaultValue={{label:2000, value:2000}}
                options = {optionsYears}
            />
            <select id="selectYear" onChange={props.handleChangeYear} value={props.year || 2000}>
                {_range(1910,2022).map(i => {
                    return(
                        <option value={i} key={i}>{i}</option>
                    )})}
            </select> */}
            <Picker 
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={props.handleChangeYear}
            />
        </div>
    )
}

export default Years