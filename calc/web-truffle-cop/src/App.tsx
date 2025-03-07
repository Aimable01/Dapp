import { useEffect, useState } from "react";
import { initWeb3, calculate, getResult } from "./utils/web3";

function App() {
  const [result, setResult] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");

  useEffect(() => {
    async function init() {
      await initWeb3();
      const initialResult = await getResult();
      setResult(initialResult);
    }
    init();
  }, []);

  const handleCalculate = async () => {
    if (!num1 || !num2) return;
    const calculatedResult = await calculate(
      Number(num1),
      Number(num2),
      operator
    );
    setResult(calculatedResult);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Blockchain Calculator DApp</h1>

      {/* simple calculator */}
      <div style={{ marginTop: "50px" }}>
        <h2>Simple Calculator</h2>
        <input
          type="number"
          placeholder="Enter first number"
          style={{ marginRight: "10px" }}
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          style={{ marginRight: "10px" }}
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <select
          style={{ marginRight: "10px" }}
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {/* the result box */}
      <div style={{ marginTop: "50px", border: "1px solid black" }}>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default App;
