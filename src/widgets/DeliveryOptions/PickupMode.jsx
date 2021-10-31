import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import "../main.css";
function PickupMode({ actionProvider }) {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(!submit);
    actionProvider.handleUserDetails();
  };
  return (
    <main>
      <lable>Pickup Time</lable>
      <TimePicker className="input" showSecond={false}/>
      {!submit && <button onClick={handleSubmit}>Confirm</button>}
      {submit && <button disabled={true}>✓ Confirmed</button>}
    </main>
  );
}
export default PickupMode;
