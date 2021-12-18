import EventEmitter from "eventemitter3";
import { formatCurrency } from "./utils";
import classNames from "classnames";
import Card from "./Card"

export default class Notification extends EventEmitter{
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor({type, price}) {
    super();
  
    this._type = type;
    this._price = price;
    this.close = document.querySelector(".delete");
    
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  empty() {
    this.container.innerHTML = "";
  }

  render() {
    formatCurrency();
    
    const template = `
<div class="notification type-${this._type}">
  <button class="delete"></button>
  🍕 <span class="type">${this._type}</span> (<span class="price">0,00</span>) has been added to your order.
</div>
    `;
    console.log(`${this._type}`)
    this.container.innerHTML = template;
  }
}
