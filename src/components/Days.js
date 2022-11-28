import React from 'react'
import _range from "lodash/range"
import { useEffect, useState } from 'react';
import Select from 'react-select'
import Picker from 'react-scrollable-picker'



const Days = (props) => {

    let optionGroups = {day: props.optionsDays}
    let valueGroups = {day: props.day}


    return (
        <div style={{width: 'fit-content', margin:'0 auto'}}>
            <Select
                onChange = {props.handleChangeDay}
                placeholder = "Day"
                options = {props.optionsDays}
            />
            {/* <Picker 
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={props.handleChangeDay}
            /> */}
        </div>
    )
}

export default Days