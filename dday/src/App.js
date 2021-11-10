import './App.css';
import Header from "./components/Header";
import CenterText from "./components/CenterText";
import DateInput from "./components/DateInput";
import Result from "./components/Result";
import Footer from "./components/Footer";
import {useState} from "react";
function App() {

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth()+1);
  const [date,setDate] = useState(new Date().getDate());

  return (
    <div id="app">
      <Header />
      <DateInput 
      year={year} 
      month={month} 
      date={date}
      setYear={setYear}
      setMonth={setMonth}
      setDate={setDate}/>

      <CenterText />
      <Result />
      <Footer />
    </div>
  );
}

export default App;