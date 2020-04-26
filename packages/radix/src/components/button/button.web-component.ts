// just a sketch to show it is easy to apply styles to webComponents

import { buttonBaseStyles, buttonSizesCSS } from './button-description';

const template = document.createElement('template');
template.innerHTML = `
<style>
radix-button ${buttonBaseStyles.normal}
.size ${buttonSizesCSS}
</style>
<button>Click me</button>`;

export class RadixButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const button = this.shadowRoot.querySelector('radix-button');
  }

  get variant() {
    return this.getAttribute('variant');
  }

  get size() {
    return this.getAttribute('size');
  }

  get disabled() {
    return this.getAttribute('disabled');
  }
}

window.customElements.define('radix-button', RadixButton);
