import { useState } from "react";
import { addRequest } from "./Calculator.Slice";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
  const additionState = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);

  console.log("additionState: ", additionState);

  const onAddNumRequest = () => {
    if (!num1 || !num2) {
      return;
    }
    dispatch(addRequest({ num1, num2 }));
  };

  return (
    <div>
      <p>Sum: {additionState.isLoading ? "Please wait" : additionState.sum}</p>
      <div>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={onAddNumRequest}>Add</button>
      </div>
    </div>
  );
};

export default Calculator;
