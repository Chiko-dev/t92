import EventEmitter from "eventemitter3";
import { formatCurrency } from "./utils";
import classNames from "classnames";
import Card from "./Card"

export default class Notification extends EventEmitter{

  static get events() {
    return {
      NOTIFICATION: "notification",
    };
  }

  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    super();
  

    this.close = document.querySelector(".delete");
    
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");

    this.delete = document.querySelector(".delete");
  }

  empty() {
    this.container.innerHTML = "";
  }

  render({type, price}) {
      formatCurrency();
    this._type = type;
    this._price = price;
      const template = `
      <div class="notification type-${this._type} ${classNames({
      "is-danger": this._type === Card.types.HAWAIIAN,
      })}">
        <button class="delete"></button>
        🍕 <span class="notification type-${this._type}">${this._type}</span> (<span class="price">${this._price}EUR</span>) has been added to your order.
      </div>
          `;
      
      this.container.innerHTML = template;

      this.container.addEventListener("click", () => {
      this.emit(Notification.events.NOTIFICATION, {
        type: this._type,
        price: this._price,
      });
    });
  }
}
