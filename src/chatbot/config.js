// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "../widgets/BotAvatar/BotAvatar";
import UserAvatar from "../widgets/UserAvatar/UserAvatar";
import Menu from "../widgets/Menu/Menu.jsx"
import Toppings from "../widgets/Additionals/Toppings";
import SpiceOptions from "../widgets/Additionals/SpiceOptions";
import SelectMode from "../widgets/DeliveryOptions/SelectMode";
import PickupMode from "../widgets/DeliveryOptions/PickupMode";
import DeliveryMode from "../widgets/DeliveryOptions/DeliveryMode";
import Phone from "../widgets/UserDetails/Phone";
import Name from "../widgets/UserDetails/Name";
import ViewOrder from "../widgets/OrderDetails/ViewOrder";
const config = {
  botName: "Munchies's Assistant",
  initialMessages: [
    createChatBotMessage(`Welcome to Munchies Food Truck`),
    createChatBotMessage(`We always believe that Good Food is Good Mood 😊 `,{
      delay:1000
    }),
    createChatBotMessage("What would you like to order today?", {
      withAvatar: false,
      delay: 2000,
      widget: "menu"
    })
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#28334AFF"
    },
    chatButton: {
      backgroundColor: "#567572ff"
    }
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#567572ff",
          padding: "5px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          fontSize: "0.85rem",
          paddingTop: "12.5px",
          paddingBottom: "12.5px",
          paddingRight: "12.5px",
          paddingLeft: "12.5px",
          fontWeight: "700",
          alignItems: "center"
        }}
      >
        Conversation with Munchies' Assistant
      </div>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />
  },

  state: {
    orderedItems:[],
    selectedToppings:"",
    preferredSpiceLevel:"",
    userName:"",
    userPhone:"",
    preferredMode:"",
    userLocation:""
  },
  widgets: [
    {
      widgetName: "menu",
      widgetFunc: (props) => <Menu {...props} />,
      mapStateToProps: ["orderedItems"]
    },
    {
      widgetName: "toppings",
      widgetFunc: (props) => <Toppings {...props} />,
      mapStateToProps: ["selectedToppings"]
    },
    {
      widgetName: "spice",
      widgetFunc: (props) => <SpiceOptions {...props} />,
      mapStateToProps: ["preferredSpiceLevel"]
    },
    {
      widgetName: "mode",
      widgetFunc: (props) => <SelectMode {...props} />,
      mapStateToProps: ["preferredMode"]
    },
    {
      widgetName: "pickup",
      widgetFunc: (props) => <PickupMode {...props} />
    },
    {
      widgetName: "delivery",
      widgetFunc: (props) => <DeliveryMode {...props} />,
      mapStateToProps:["userLocation"]
    },
    {
      widgetName: "name",
      widgetFunc: (props) => <Name {...props} />,
      mapStateToProps: ["userName"]
    },
    {
      widgetName: "phone",
      widgetFunc: (props) => <Phone {...props} />,
      mapStateToProps: ["userPhone"]
    },
    {
      widgetName: "view",
      widgetFunc: (props) => <ViewOrder {...props} />,
      mapStateToProps: [
      "orderedItems",
      "selectedToppings",
      "preferredSpiceLevel",
      "userPhone",
      "userName",
      "preferredMode",
      "userLocation"
    ]
    },
  ]
};

export default config;
