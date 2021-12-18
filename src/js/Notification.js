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

      const template = `
      <div class="notification type-${type} ${classNames({
      "is-danger": type === Card.types.HAWAIIAN,
      })}">
        <button class="delete"></button>
        🍕 <span class="type-${type}">${type}</span> (<span class="price">${price} €</span>) has been added to your order.
      </div>
          `;
      
      this.container.innerHTML = template;
  }
}
