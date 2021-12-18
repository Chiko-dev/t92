import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    
    const pizzas = [
      {
        type: Card.types.HAWAIIAN,
        price: 8.99,
      },
      {
        type: Card.types.PEPPERONI,
        price: 9.99,
      },
      {
        type: Card.types.MARGHERITA,
        price: 7.99,
      },
    ];

    pizzas.forEach((pizza) => {
      const card = new Card({ ...pizza });
      const notification = new Notification({ ...pizza});
      card.render();
      console.log(notification.container);
      document.querySelector(".main").appendChild(card.container);

      card.container.addEventListener("click", () =>{
        notification.render();
        document.querySelector(".main").appendChild(notification.container);  
        notification.empty();
      });
    });


          
          

    this.emit(Application.events.READY);
  }
}
