// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    createCustomMessage
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.createCustomMessage = createCustomMessage;
  }
  handleMenu = () => {
    const message = this.createChatBotMessage("Choose from below", {
      delay: 500,
      widget: "menu",
      withAvatar: true
    });
    this.setChatbotMessage(message);
  };
  /*Toppings */
  handleToppings = () => {
    const message1 = this.createChatBotMessage(
      "Would you like to add any extra topping?"
    );
    const message2 = this.createChatBotMessage("Choose from below", {
      delay: 500,
      widget: "toppings",
      withAvatar: false
    });
    this.setChatbotMessage(message1);
    this.setChatbotMessage(message2);
  };
  /*Spice level */
  handleSpice = () => {
    const message1 = this.createChatBotMessage(
      "What spice level would you like us to keep? 💁"
    );
    const message2 = this.createChatBotMessage("Choose from below", {
      delay: 500,
      widget: "spice",
      withAvatar: false
    });
    this.setChatbotMessage(message1);
    this.setChatbotMessage(message2);
  };
  /*Select Mode */
  handleDelivery = () => {
    const message1 = this.createChatBotMessage("And we are done. 😊");
    const message2 = this.createChatBotMessage(
      "How would you like to take this order?",
      {
        delay: 500,
        widget: "mode",
        withAvatar: true
      }
    );
    this.setChatbotMessage(message1);
    this.setChatbotMessage(message2);
  };
  handlePickupMode = () => {
    const message1 = this.createChatBotMessage(
      "Your order will be ready within 30 mins"
    );
    const message2 = this.createChatBotMessage(
      "Please select the time of your pickup?  ⌚",
      {
        delay: 500,
        widget: "pickup",
        withAvatar: true
      }
    );
    this.setChatbotMessage(message1);
    this.setChatbotMessage(message2);
  };
  handleDeliveryMode = () => {
    const message = this.createChatBotMessage(
      "Please help me with your location",
      {
        delay: 500,
        widget: "delivery",
        withAvatar: true
      }
    );
    this.setChatbotMessage(message);
  };
  /**Location Error */
  handleLocationError = () => {
    const message = this.createChatBotMessage("Please enter a valid location", {
      delay: 500,
      widget: "delivery",
      withAvatar: true
    });
    this.setChatbotMessage(message);
  };
  /*User Details */
  handleUserDetails = () => {
    const message1 = this.createChatBotMessage(
      "Lastly please provide me your personal details"
    );
    const message2 = this.createChatBotMessage(
      "Please help me with your name",
      {
        delay: 500,
        widget: "name",
        withAvatar: true
      }
    );
    this.setChatbotMessage(message1);
    this.setChatbotMessage(message2);
  };
  /**Name Error */
  handleNameError = () => {
    const message = this.createChatBotMessage(
      "Please enter a name of minimum length 4",
      {
        delay: 500,
        widget: "name",
        withAvatar: true
      }
    );
    this.setChatbotMessage(message);
  };
/**User Contact Details */
  handlePhone = () => {
    const message = this.createChatBotMessage(
      "Please enter your phone number with country code",
      {
        delay: 500,
        widget: "phone",
        withAvatar: true
      }
    );
    this.setChatbotMessage(message);
  };
  handlePhoneError = () => {
    const message = this.createChatBotMessage(
      "Please enter a 10 digit valid phone number and country code",
      {
        delay: 500,
        widget: "phone",
        withAvatar: true
      }
    );
    this.setChatbotMessage(message);
  };
  /*ORDER DETAILS */
  handleViewOrder = () => {
    const message = this.createChatBotMessage("Your Order Details are", {
      widget: "view",
      withAvatar: true
    });
    this.setChatbotMessage(message);
  };

  handleGreeting = () => {
    const message = this.createChatBotMessage(
      "Thanks for ordering with us. Looking forward to assist you again!"
    );
    this.setChatbotMessage(message);
  };
  handleUnknown = () => {
    const message = this.createChatBotMessage(
      "Tell me how can I help you? Why dont you try having a look at our menu!",
      {
        widget: "menu",
        delay: 500,
        withAvatar: true
      }
    );
    this.setChatbotMessage(message);
  };
  setChatbotMessage = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages]
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages]
      }));
    }
  };
}
export default ActionProvider;
