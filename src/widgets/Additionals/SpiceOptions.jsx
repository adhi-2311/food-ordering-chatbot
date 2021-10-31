import React, { useState } from "react";
import "../main.css";
import data from "./datas/spice";
function SpiceOptions({ actionProvider, preferredSpiceLevel, setState }) {
  const [submit, setSubmit] = useState(false);
  const [spice, setSpice] = useState("");
  const [enable, setEnable] = useState(false);

  function handleChange(e) {
    if (e.target.value !== "none") {
      const selectedSpice = e.target.value;
      setSpice(selectedSpice);
      setEnable(true);
    } else setEnable(false);
  }
  function handleSubmit() {
    setSubmit(!submit);
    setState((state) => ({
      ...state,
      preferredSpiceLevel: spice
    }));
    //console.log(spice);

    actionProvider.handleDelivery();
  }

  return (
    <main>
      <select
        className="input"
        name="Choose from below"
        value={spice.level}
        onChange={(e) => handleChange(e)}
      >
        <option value="none">Choose one</option>
        {data.map((item) => {
          return (
            <option key={item.id} value={item.level}>
              {item.level}
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
        {submit && <button disabled={true}>✓ Confirmed</button>}
      </div>
    </main>
  );
}
export default SpiceOptions;
