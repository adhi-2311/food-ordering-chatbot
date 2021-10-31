// eslint-disable-next-line
import React, { useState } from "react";
import "../main.css";
function ViewOrder({
  actionProvider,
  orderedItems,
  selectedToppings,
  preferredSpiceLevel,
  userPhone,
  userName,
  userLocation,
  preferredMode
}) {
  const [submit, setSubmit] = useState(false);
  
  let totalPrice = orderedItems.reduce(function (totalCost, item) {
    return totalCost + item.price;
  }, 0);
  const handleSubmit=()=> {
    setSubmit(!submit);
    actionProvider.handleGreeting();
  }
  
  const orderID = Math.random().toString(36).substr(2, 5);
  return (
    <main>
      <div className="order">
        <div>
          <b>Order ID: </b>
          &nbsp;{orderID}
        </div>
        <div>
          <b>Name: </b>
          &nbsp;{userName}
        </div>
        <div>
          <b>Contact: </b>
          &nbsp;{userPhone}
        </div>
        <div>
          <b>Mode of Delivery: </b>
          {preferredMode}
        </div>
        {preferredMode === "Delivery" ? (
          <div>
            <b>Location: </b>
            &nbsp;{userLocation}
          </div>
        ) : null}
        <div>
          <b>Items ordered: </b>&nbsp;
          {orderedItems.map((item) => {
            return (
              <div>
              {item.itemName}-{item.quantity}
              </div>
            );
          })}
        </div>
        <div>
          <b>Cost:</b>
          &nbsp;{totalPrice}
        </div>
        <div>
          <b>Toppings:</b>
          &nbsp;{selectedToppings}
        </div>
        <div>
          <b>Spice Level:</b>
          &nbsp;{preferredSpiceLevel}
        </div>
      </div>
      {!submit && <button onClick={handleSubmit}>Confirm</button>}
      {submit && <button disabled={true}>Confirm</button>}
    </main>
  );
}
export default ViewOrder;
