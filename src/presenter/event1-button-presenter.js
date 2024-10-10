// презентер кнопки New_Event
import ButtonView from '../view/event-button-view.js';
import {render} from '../framework/render.js';

export default class ButtonPresenter {
  #container = null;

  constructor({container}) {
    this.#container = container;
  }

  init() {
    render(new ButtonView(), this.#container);
  }
}
