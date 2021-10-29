import React, { useEffect, useState } from "react";

const DateInput = ({year, month, date, setYear, setMonth, setDate}) => {
  //구조분해할당...?
  
  console.log('new date()', new Date());
  //const [year, setYear] = useState(new Date().getFullYear());
  //const [month, setMonth] = useState(new Date().getMonth()+1);
  //const [date,setDate] = useState(new Date().getDate());

  
  const handleYearChange = (e) => {
    setYear(e.target.value);
  }
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  }
  
const handleChange = (e, setState) => {
  setState(e.target.value);
}
  //useEffect(()=> {
    //console.log('year',year);
  //}, [year]);

  //handlechange가 뭐....야..?
  
//const handleChange = (e) => {
  //setYear(e.target.value);
//}
//const handleMonthChange = (e) => {
  //setMonth(e.target.value);
//}

  return (
    <div id="dateInput">
      <button>오늘</button>
      <div>
        <input type="text"
          value={year}
          onChange={(e) => handleChange(e,setYear)}
        />
        년
        <input
          type="text"
          value={month}
          onChange={(e) => handleChange(e,setMonth)}
        />
        월
        <input
          type="text"
          value={date}
          onChange={(e) => handleChange(e,setDate)}
        />
        일을 기준으로
      </div>
    </div>
  );

  };
export default DateInput;