import React from 'react';
import {useState} from "react";

const Text1 = ({year, month, date}) => {
    //input값과 year, month, date 값을 연산해 resultDate에 넣는다.
    //초기값을 빈값으로라도 넣어줘야 함
    const [inputValue, setInputValue] = useState("");
    const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");

    const handleChange = (e) => {
        if(!e.target.value) {
            setInputValue("");
            setResultDate('yyyy년 mm월 dd일');
            return;
                }
        setInputValue(e.target.value);
        printDate();
      };
    const printDate = (value) => {
        if (value ===undefined || value ===""){
            setResultDate('yyyy년 mm월 dd일');
            return;
        }
        const tempDate = new Date();
        tempDate.setFullYear(Number(year));
        tempDate.setMonth(Number(month) - 1);
        tempDate.setDate(Number(date) + value - 1);
        //임시 날짜 만들고, 그 날짜를 가공해 resultDate에 넣는다.
        const result = `${tempDate.getFullYear()}년 ${tempDate.getMonth() + 1}월 ${tempDate.getDate()}일`;
        setResultDate(result);
    };
    // 1. 오늘 버튼 구현
  // 2. D-day 계산 구현은 과제...
  
  return (
        <div className="text">
            <div>
            <input type="text" value={inputValue} onChange={handleChange} />
                일째 되는 날은?
            </div>
            <div>(resultDate)</div>
        </div>
    );
};

export default Text1;