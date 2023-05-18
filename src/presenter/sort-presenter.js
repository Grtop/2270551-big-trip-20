import SortingView from '../view/sort-view.js';
import {render} from '../framework/render.js';

/*export default class SortingPresenter {
  sortingComponent = new SortingView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.sortingComponent, this.container);
  }
}*/

export default class SortingPresenter {
  #container = null;

  constructor({container}) {
    this.#container = container;
  }

  init() {
    render(new SortingView(), this.#container);
  }
}
