import { useState } from "react";

function ConfigCounter({ onReceivedCounter }) {

    console.log('configcounter');
  const [interCounter, setInterCounter] = useState(0);
  

  function handleInterCounter(event) {
    setInterCounter(+event.target.value);
  }

  function handleSetCounter() {
   
    setInterCounter(0);

   
      onReceivedCounter(interCounter);
    
  }

  return (
    <>
      <h3>set Counter</h3>
      <input type="number" value={interCounter} onChange={handleInterCounter} />
      <button onClick={handleSetCounter}>Set</button>
    </>
  );
}

export default ConfigCounter;
