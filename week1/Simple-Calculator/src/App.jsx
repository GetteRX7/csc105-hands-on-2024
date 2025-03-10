  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
  const [count, setCount] = useState(0)
  const [result , setResult] = useState(0);
  const [input , setInput] = useState("");

  const handleOperation = (operation) => {
    const value = parseFloat(input);
    if(isNaN(value)){
      return;
    }

    switch (operation) {
      case "add":
        setResult(result + value);
        break;
      case "subtract":
        setResult(result - value);
        break;
      case "multiply":
        setResult(result * value);
        break;
      case "divide":
        if (value !== 0) setResult(result / value);
        break;
      default:
        break;
    }
    setInput("");
  };

    return (
      <div className = "container">
        <div className = "calculator">
          <h1>Simple Calculator</h1>
          <p>Result: {result}</p>
          <input type="number" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a number"/>
          <div className="buttons">
          <button className="btn" onClick={() => handleOperation("add")}>Add</button>
          <button className="btn" onClick={() => handleOperation("subtract")}>Subtract</button>
          <button className="btn" onClick={() => handleOperation("multiply")}>Multiply</button>
          <button className="btn" onClick={() => handleOperation("divide")}>Divide</button>
          <button className="btnreset-input" onClick={() => setInput("")}>Reset Input</button>
          <button className="btnreset-result" onClick={() => setResult(0)}>Reset Result</button>
        </div>
      </div>
    </div>
    );
  }

  export default App
