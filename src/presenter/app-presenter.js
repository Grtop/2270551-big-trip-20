import EventsModel from '../model/events-model.js';
import OffersModel from '../model/offers-model.js';
import DestinationsModel from '../model/destinations-model.js';
import TripInfoView from '../view/trip-info-view.js';
import SortingPresenter from './sort-presenter.js';
import FiltersPresenter from './filters-presenter';
import EventsPresenter from './event-presenter.js';
import { render, RenderPosition } from '../framework/render.js';


export default class AppPresenter {

  eventsModel = new EventsModel();
  offersModel = new OffersModel();
  destinationsModel = new DestinationsModel();

  constructor({ tripMainElement, filtersElement, siteMainElement }) {
    this.tripMainElement = tripMainElement; //создание ДОМ шапка сайта
    this.filtersElement = filtersElement; //создание ДОМ фильтры
    this.siteMainElement = siteMainElement; //создание ДОМ сортирока

  }

  init() {

    this.filtersComponent = new FiltersPresenter({
      container: this.filtersElement,
    });
    this.sortingComponent = new SortingPresenter({
      container: this.siteMainElement,
    });
    this.eventsComponent = new EventsPresenter({
      container: this.siteMainElement,
      eventsModel: this.eventsModel,
      offersModel: this.offersModel,
      destinationsModel: this.destinationsModel,
    });
    render(new TripInfoView(), this.tripMainElement, RenderPosition.AFTERBEGIN);
    this.filtersComponent.init();
    this.sortingComponent.init();
    this.eventsComponent.init();

  }

}
