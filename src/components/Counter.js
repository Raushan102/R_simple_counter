import Button from "./Button";
import { useState } from "react";
import CounterHistory from "./CounterHistory";

function Counter({ setValue, onselect }) {
  console.log("counter");

  const [counterHistory, setCounterHistory] = useState([
    {
      data: 0,
      id: Math.random() * 1000,
    },
  ]);



  let currentValue=setValue

 
      currentValue = counterHistory.reduce(
      (accumulator, current) => accumulator + current.data,
      setValue
    );

    
  

 

  function handleDecreaseButton() {
    console.log("decreass");

    setCounterHistory((previousData) => {
      return [
        {
          data: -1,
          id: Math.random() * 1000,
        },
        ...previousData,
      ];
    });
  }

  function handleIncreaseButton() {
    console.log("increass");

    setCounterHistory((previousData) => {
      return [
        {
          data: +1,
          id: Math.random() * 1000,
        },
        ...previousData,
      ];
    });
  }

  console.log(counterHistory);

  return (
    <>
      <div id="counter-container">
        <Button onselect={handleDecreaseButton}> - decrease</Button>

        <span>{currentValue}</span>

        <Button onselect={handleIncreaseButton}> + increase</Button>
      </div>

      <h3>History</h3>

      <div id="HistoryContainer">
        <CounterHistory CounterHistoryData={counterHistory} />
      </div>
    </>
  );
}

export default Counter;
