import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function defaultSetting() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div className="inputSection">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>
          <input
            type="number"
            placeholder={`${count}`}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>

      <div>
        {step !== 1 && count !== 0 ? (
          <button onClick={defaultSetting}>Reset</button>
        ) : step === 1 && count === 0 ? (
          ""
        ) : (
          <button onClick={defaultSetting}>Reset</button>
        )}
      </div>
    </div>
  );
}
