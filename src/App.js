import "./App.css";
import Header from "./components/Header.js";
import ConfigCounter from "./components/ConfigCounter.js";
import Counter from "./components/Counter.js";
import { useState } from "react";

function App() {


  console.log('App');
  const [receivedCounter, setReceivedCounter] = useState(0);

  // let value = Math.random();

  function handleReceivedCounter(interCounterValue) {
    return setReceivedCounter(interCounterValue);
  }

  return (
    <div className="App">
      <Header />
      <section id="mainCounter">
        <ConfigCounter onReceivedCounter={handleReceivedCounter} />
      </section>

      <main id="counter">
        <Counter setValue={receivedCounter} key={receivedCounter} />
      </main>
    </div>
  );
}

export default App;
