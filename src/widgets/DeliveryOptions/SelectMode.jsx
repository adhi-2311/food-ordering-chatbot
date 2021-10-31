// eslint-disable-next-line
import React, { useState } from "react";
import "../main.css";
function SelectMode({ actionProvider, preferredMode, setState }) {
  const [submit, setSubmit] = useState(false);
  const [enable, setEnable] = useState(false);
  const [selectedMode, setMode] = useState("");
  const data = [
    {
      mode: "Pickup",
      id: 1
    },
    {
      mode: "Delivery",
      id: 2
    }
  ];

  const handleChange = (e) => {
    if (e.target.value !== "none") {
      const newMode = e.target.value;
      setMode(newMode);
      setEnable(true);
    } else setEnable(false);
  };
  const createDeliveryList = () => {
    return data.map((item) => {
      return (
        <option key={item.id} value={item.mode}>
          {item.mode}
        </option>
      );
    });
  };
  const handleSubmit = () => {
    setSubmit(!submit);
    setState((state) => ({
      ...state,
      preferredMode: selectedMode
    }));
    if (selectedMode === "Delivery") actionProvider.handleDeliveryMode();
    else if (selectedMode === "Pickup") actionProvider.handlePickupMode();
  };
  return (
    <main>
      <select
        className="input"
        name="Choose from below"
        value={selectedMode.mode}
        onChange={(e) => handleChange(e)}
      >
        {<option value="none">Choose one</option>}
        {createDeliveryList()}
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
export default SelectMode;
