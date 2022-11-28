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
  const [message, setMessage] = useState(null)
  const [optionsDays, setOptionsDays] = useState([])

  let tenPowerDate
  let tenPowerDays

  // const handleChangeYear = (value) => {
  //   console.log(value)
  //   // setYear(value.target.value)
  //   setYear(value.value)
  // }

  const handleChangeYear = (name, value) => {
    console.log(value)
    setYear(value)
    if(day){
      calculateMath(day, month, value)
    }

  }

  const handleChangeMonth = (event) => {
    console.log(event.target.innerText)
    setMonth(parseInt(event.target.dataset.value))
    console.log(event.target.dataset.value)
    console.log(parseInt(event.target.dataset.value) === 1)
    optionGroupsDays(event.target.innerText)
    if(day){
      calculateMath(day, parseInt(event.target.dataset.value), year )
    }
  }

  const handleChangeDay = (value) => {
    console.log(value.value)
    setDay(value.value)
    calculateMath(value.value, month, year)
  }

  const calculateMath = (dayValue, monthValue, yearValue) => {
    
    const oneDay = 24*60*60*1000
    const birthDate = new Date(yearValue, monthValue, dayValue)
    const today = new Date()
    
    if(birthDate < today){
      const daysDifference = Math.round(Math.abs((birthDate - today)/oneDay))
    
    const exp = Math.ceil(Math.log10(daysDifference))
    tenPowerDays = Math.pow(10, exp)
    
    tenPowerDate = birthDate
    tenPowerDate.setDate(tenPowerDate.getDate() + tenPowerDays)

    setMessage(`Your next math birthday is your ${tenPowerDays}-day-old birthday 
      on ${tenPowerDate.getFullYear()}-${(tenPowerDate.getMonth()+1).toString().padStart(2,'0')}-${tenPowerDate.getDate()} !`)
    
    } else {
      setMessage("Please choose a date before today to calculate your mathbirthday")
    }

    
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
    // fontFamily: 'Lora',
    fontFamily: 'Patrick Hand',
    // fontSize: '10%',
    color: "#C37B89"

  }

  const messageStyle = {
    textAlign: "center",
    fontFamily: 'Patrick Hand',
    fontSize: '180%',
    marginTop: '5%',
    color: "#C37B89"
    

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
        message ? 
        <div>
          <p style={messageStyle}>{message}</p>
        </div> : <></>
      }

    </div>



  )







}

export default App;
