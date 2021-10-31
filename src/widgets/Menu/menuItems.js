import pizzaImg from "../../assets/pizza.jpg";
import tacosImg from "../../assets/tacos.jpg";
import burgerImg from "../../assets/burger.jpg";
import nachosImg from "../../assets/nachos.jpg";
const data = [
    {
      text: "Pizza",
      img: pizzaImg,
      desc:"Thin Crust Veggie Pizza with Extra Cheese",
      added: false,
      price: 11.18,
      qty: 0,
      id: 1
    },
    {
      text: "Tacos",
      img:tacosImg,
      desc: "Crunchy tacos with creamy dip",
      added: false,
      price: 10.20,
      qty: 0,
      id: 2
    },
    {
      text: "Burger",
      img:burgerImg,
      desc:"Creamy CheeseFilled Chicken Burger",
      added: false,
      price: 9.18,
      qty: 0,
      id: 3
    },
    {
      text: "Nachos",
      img:nachosImg,
      desc:"Crispy Triple Layer Nachos",
      added: false,
      price: 10.18,
      qty: 0,
      id: 4
    },
  ];
  export default data;