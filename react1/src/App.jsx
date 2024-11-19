import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [step, setStep] = useState(1);

  function handleStep(e) {
    setStep(Number(e));
  }

  return (
    <>
      <h1>Counter</h1>

      <input type="number" onChange={(e) => handleStep(e.target.value)} />
      <p>Step</p>
      <button onClick={() => setCurrentValue(currentValue - step)}>
        Decrement
      </button>
      <h3>{currentValue}</h3>
      <button onClick={() => setCurrentValue(currentValue + step)}>
        Increment
      </button>
    </>
  );
}

export default App;
