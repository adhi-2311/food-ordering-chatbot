import "./styles.css";
import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import { ReactComponent as Button } from "./assets/robot.svg";
function App({ children }) {
  const [showBot, setBot] = useState(true);

  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }

  return (
    <div className="App">
      <div className="header">
        <h4>
          Try out Munchies's food assistant and have an interactive experience
          placing your food order!
        </h4>
        <h4>Order @MUNCHIES FOOD TRUCK</h4>
        <p>HSR Layout- Sector 3 block-4,Bengaluru-530068</p>
      </div>
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      )}
      <div className="footer">
        <p>Made by @Adhisikha</p>
        <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
          <a href="https://github.com/adhi-2311">
            <GoMarkGithub />
          </a>
        </IconContext.Provider>
      </div>
      <button className="app-chatbot-button" onClick={handleBot}>
        <Button className="app-chatbot-button-icon" />
      </button>
    </div>
  );
}
export default App;
