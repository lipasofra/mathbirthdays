import './App.css';
import { useEffect, useState } from 'react';
import Years from './components/Years';
import Months from './components/Months';
import Days from './components/Days';
import _range from "lodash/range"



const App = () => {

  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)
  const [day, setDay] = useState(null)
  const [displayMessage, setDisplayMessage] = useState(false)
  const [optionsDays, setOptionsDays] = useState([])

  let tenPowerDate
  let tenPowerDays

  // const handleChangeYear = (value) => {
  //   console.log(value)
  //   // setYear(value.target.value)
  //   setYear(value.value)
  // }

  const handleChangeMonth = (event) => {
    console.log(event.target.innerText)
    setMonth(parseInt(event.target.dataset.value))
    console.log(event.target.dataset.value)
    console.log(parseInt(event.target.dataset.value) === 1)
    optionGroupsDays(event.target.innerText)
  }

  const handleChangeDay = (value) => {
    console.log(value.value)
    setDay(value.value)
    calculateMath()
  }

  const calculateMath = () => {
    //calculos para le mensajito

    console.log(day)
    const oneDay = 24*60*60*1000
    const birthDate = new Date(year, month, day)
    const today = new Date()

    const daysDifference = Math.round(Math.abs((birthDate - today)/oneDay))
    console.log(daysDifference)

    const exp = Math.ceil(Math.log(daysDifference, 10))
    tenPowerDays = Math.pow(10, exp)
    // const birthDays = Math.round(Math.abs((birthDate)/oneDay))
    // (birthDays + tenPowerDays)/
    tenPowerDate = birthDate.getDate() + tenPowerDays
    console.log(tenPowerDate)

    setDisplayMessage(true)
  }

  const handleChangeYear = (name, value) => {
    console.log(value)
    // setYear(value.target.value)
    setYear(value)

  }

  

    let optionsEvenMonth = _range(1,31).map(i => {
        return {
        value: i, 
        label: i
        }
    })

    let optionsOddMonth = _range(1,32).map(i => {
        return {
        value: i, 
        label: i
        }
    })

    let optionsLeapFebruary = _range(1,30).map(i => {
        return {
        value: i, 
        label: i
        }
    })

    let optionsNoLeapFebruary = _range(1,29).map(i => {
        return {
        value: i, 
        label: i
        }
    })


  const optionGroupsDays = (selectedMonth) => {
    console.log(selectedMonth)
    console.log(selectedMonth === 'Mar')

    const oddMonths = ['Jan', 'Mar', 'May', 'Jul', 'Aug', 'Oct', 'Dec']
    const evenMonths = ['Apr', 'Jun', 'Sep', 'Nov']


    if(oddMonths.includes(selectedMonth)){
        setOptionsDays(optionsOddMonth)
    } else if (evenMonths.includes(selectedMonth)) {
        setOptionsDays(optionsEvenMonth)
    } else {
        if(year % 4 !== 0){
            setOptionsDays(optionsNoLeapFebruary)
        } else if ((year % 100 === 0) && (year % 400 === 0)){
            setOptionsDays(optionsLeapFebruary)
        } else {
            setOptionsDays(optionsNoLeapFebruary)
        }
    }

  }

  const titleStyle = {
    textAlign: "center",
    fontFamily: 'Lora',
    fontSize: '50%',

  }

  return (
    <div className="shadow-sm p-3 bg-body rounded" style={{margin: "3rem"}}>
      <div className='container' style={titleStyle}>
        <h1>Welcome!</h1>
        <h3>Enter your birth date</h3>
      </div>

      <Years
        year = {year}
        handleChangeYear = {handleChangeYear}
      />

      { 
        year ? 
        <Months 
          // year = {year}
          handleChangeMonth = {handleChangeMonth}
        /> : <></>

      }
      { 
        month ? 
        <Days 
          handleChangeDay = {handleChangeDay}
          optionsDays = {optionsDays}
        
        /> : <></>

      }
      {
        displayMessage ? 
        <div>
          <p>Your next math brithday is your {tenPowerDays}-day-old birthday on {tenPowerDate} date</p>
        </div> : <></>
      }

    </div>



  )







}

export default App;
