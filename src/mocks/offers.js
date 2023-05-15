import { getRandomArrayElement } from '../utils.js';
import { WAYPOINT_TYPES } from '../consts.js';
//const OFFERS = ['Order Uber', 'Add luggage', 'Switch to comfort', 'Rent a car', 'Add breakfast', 'Book tickets', 'Lunch in city'];
const OFFERS_NUMBER = 6;

const OFFERS_TITLES = [
  'Upgrade',
  'Downgrade class',
  'Get cold drink',
  'Get hot drink',
  'Get blanket',
  'Get sandwich',
];

const OFFERS_PRICES = [100, 13, 75, 40, 5, 66];

function createMockOffers() {
  const offers = new Map();

  for (let i = 1; i <= OFFERS_NUMBER; i ++) {
    offers.set(i, {
      title: getRandomArrayElement(OFFERS_TITLES),
      price: getRandomArrayElement(OFFERS_PRICES),
    });
  }

  return offers;

}

function createMockOffersByTypes() {
  const mockOffers = new Map();
  WAYPOINT_TYPES.forEach((type) => mockOffers.set(type, createMockOffers()));

  return mockOffers;
}
export { createMockOffersByTypes, OFFERS_TITLES, OFFERS_PRICES };
