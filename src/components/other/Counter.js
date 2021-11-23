import { useState } from "react";
function Counter() {
  const [firstNum, setFirstNum] = useState("");
  const [scndNum, setScndNum] = useState("");
  const [result, setResult] = useState(null);

  const add = () => {
    let finalResult = parseInt(firstNum + scndNum);
    console.log(typeof finalResult);
    setResult(finalResult);
  };
  const minus = () => {
    let finalResult = +firstNum - scndNum;
    setResult(finalResult);
  };
  const multi = () => {
    let finalResult = +firstNum * scndNum;
    setResult(finalResult);
  };
  const division = () => {
    let finalResult = firstNum / scndNum;
    setResult(finalResult);
  };

  return (
    <>
      <form action="/">
        <div className="my-5">
          <label htmlFor="f_number">First Number</label>
          <input
            type="text"
            value={firstNum}
            id="f_number"
            onChange={(e) => setFirstNum(e.target.value)}
            placeholder="Enter number"
            className="border-2 border-blue-400 rounded focus:outline-none px-2 ml-3"
          />
        </div>
        <div className="my-5">
          <label htmlFor="l_number">Last Number</label>
          <input
            type="text"
            value={scndNum}
            id="l_number"
            onChange={(e) => setScndNum(e.target.value)}
            placeholder="Enter number"
            className="border-2 border-blue-400 rounded focus:outline-none px-2 ml-3"
          />
        </div>

        <div className="buttons container mx-auto flex">
          <button
            type="button"
            className="flex-1 bg-blue-600 text-white py-2 mx-3 rounded"
            onClick={add}
          >
            +
          </button>
          <button
            type="button"
            className="flex-1 bg-blue-600 text-white py-2 mx-3 rounded"
            onClick={minus}
          >
            -
          </button>
          <button
            type="button"
            className="flex-1 bg-blue-600 text-white py-2 mx-3 rounded"
            onClick={multi}
          >
            *
          </button>
          <button
            type="button"
            className="flex-1 bg-blue-600 text-white py-2 mx-3 rounded"
            onClick={division}
          >
            /
          </button>
        </div>
      </form>

      <h2>Result:</h2>
      <p>{result || "Enter Value to show Result"}</p>
    </>
  );
}

export default Counter;
