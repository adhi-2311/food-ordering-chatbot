import React, { useState } from "react";
import "../main.css";
function DeliveryMode({ actionProvider, userLocation, setState }) {
  const [submit, setSubmit] = useState(false);
  const [location, setLocation] = useState("");
  const [enable, setEnable] = useState(false);
  const handleChange = (e) => {
    setLocation(e.target.value);
    setEnable(true);
  };
  const handleSubmit = () => {
    if (location.length < 10) actionProvider.handleLocationError();
    else {
      setSubmit(true);
      setState((state) => ({
        ...state,
        userLocation: location
      }));
      actionProvider.handleUserDetails();
    }
  };
  return (
    <main>
      <label for="name">Location:</label>
      <input
        className="input"
        type="text"
        id="location"
        name="location"
        value={location}
        required
        onChange={handleChange}
      ></input>
      {!submit && (
        <button onClick={handleSubmit} disabled={!enable}>
          Confirm
        </button>
      )}
      {submit && <button disabled={true}>✓ Confirmed</button>}
    </main>
  );
}
export default DeliveryMode;
