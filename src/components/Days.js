import React from 'react'
import _range from "lodash/range"
import { useEffect, useState } from 'react';



const Days = (props) => {

    const [optionsDays, setOptionsDays] = ([])

    let optionsEvenMonth = _range(1,30).map(i => {
        return {
        value: i, 
        label: i
        }
    })

    let optionsOddMonth = _range(1,31).map(i => {
        return {
        value: i, 
        label: i
        }
    })

    let optionsLeapFebruary = _range(1,29).map(i => {
        return {
        value: i, 
        label: i
        }
    })

    let optionsNoLeapFebruary = _range(1,28).map(i => {
        return {
        value: i, 
        label: i
        }
    })
    
    const optionGroups = () => {
        if(props.month === ('Jan' || 'Mar' || 'May' || 'Jul' || 'Aug' || 'Oct' || 'Dec')){
            setOptionsDays(optionsOddMonth)
        } else if (props.month === ('Apr' || 'Jun' || 'Sep' || 'Nov')) {
            setOptionsDays(optionsEvenMonth)
        } else {
            if(props.year % 4 !== 0){
                setOptionsDays(optionsNoLeapFebruary)
            } else if ((props.year % 100 === 0) && (props.year % 400 === 0)){
                setOptionsDays(optionsLeapFebruary)
            }
        }

    }
    
    let valueGroups = {year: props.year || 2000}


    return (
        <div>
            <Select
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
            </select>
            <Picker 
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={props.handleChangeYear}
            />
        </div>
    )
}

export default Days