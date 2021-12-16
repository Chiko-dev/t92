import { formatCurrency } from "./utils";
import classNames from "classnames";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  empty() {
    this.container.innerHTML = "";
  }

  render() {
    const template = `
<div class="notification type-pepperoni">
  <button class="delete"></button>
  🍕 <span class="type">pepperoni</span> (<span class="price">0,00</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
  }
}
