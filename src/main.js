import AppPresenter from './presenter/app-presenter';
import FilterModel from './model/filter-model.js';


const tripMainElement = document.querySelector('.trip-main');
const filtersElement = tripMainElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const filterModel = new FilterModel();

const appComponent = new AppPresenter({
  tripMainElement,
  filtersElement,
  siteMainElement,
  //destinationModel,
  filterModel
});

appComponent.init();
