import React, { useState } from "react";
import "../main.css";
import data from "./datas/toppingItem";
function Toppings({ actionProvider, selectedToppings, setState }) {
  const [submit, setSubmit] = useState(false);
  const [top, setTopping] = useState("");
  const [enable, setEnable] = useState(false);
  function handleChange(e) {
    if (e.target.value !== "none") {
      setEnable(true);
      setTopping(e.target.value);
    } else setEnable(false);
  }

  function handleSubmit() {
    setSubmit(true);
    setState((state) => ({
      ...state,
      selectedToppings: top
    }));
    actionProvider.handleSpice();
  }

  return (
    <main>
      <select
        className="input"
        name="Choose from below"
        value={top.item}
        onChange={(e) => handleChange(e)}
      >
        <option value="none">Choose one</option>
        {data.map((topping) => {
          return (
            <option key={topping.id} value={topping.item}>
              {topping.item}
            </option>
          );
        })}
      </select>
      <div>
        {!submit && (
          <button onClick={handleSubmit} disabled={!enable}>
            Confirm
          </button>
        )}
        {submit && <button disabled={enable}>✓ Confirmed</button>}
      </div>
    </main>
  );
}
export default Toppings;
