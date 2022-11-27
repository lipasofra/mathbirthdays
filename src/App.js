import './App.css';
import { useEffect, useState } from 'react';
import Years from './components/Years';
import Months from './components/Months';
import Days from './components/Days';
import _range from "lodash/range"



const App = () => {

  const [year, setYear] = useState(null)
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')


  const handleChangeYear = (value) => {
    console.log(value)
    // setYear(value.target.value)
    setYear(value.value)
  }

  // const handleChangeYear = (name, value) => {
  //   console.log(value)
  //   // setYear(value.target.value)
  //   setYear(value)

  // }


  return (
    <div>
      <h1>Welcome</h1>
      <h3>Enter your birth date</h3>

      <Years
        year = {year}
        handleChangeYear = {handleChangeYear}
      />

      { 
        year ? 
        <Months 
        
        /> : <></>

      }
      { 
        month ? 
        <Days 
        
        /> : <></>

      }

    </div>



  )







}

export default App;
