import { DurationFormats } from './consts.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(duration);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

function getRandomNumber(min = 1, max = 10) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomArrayElement(items) {
  return items[getRandomNumber(0, items.length - 1)];
}

function transformDate(date, format) {
  return dayjs(date).format(format);
}

function calculateDuration(timeFrom, timeTo) {
  return dayjs.duration(dayjs(timeTo).diff(timeFrom));
}

function getDuration(timeFrom, timeTo) {
  const timeDuration = calculateDuration(timeFrom, timeTo);

  const isDaysLong = Boolean(timeDuration.days());
  const isHoursLong = Boolean(timeDuration.hours());

  let format;

  switch (true) {
    case isDaysLong:
      format = DurationFormats.DAYS;
      break;
    case isHoursLong:
      format = DurationFormats.HOURS;
      break;
    default:
      format = DurationFormats.MINUTES;
  }

  return timeDuration.format(format);
}

function startStringWithCapital(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function isKeyEscape(evt) {
  return evt.key === 'Escape';
}

function sortByTime(itemA, itemB) {
  const timeA = calculateDuration(itemA.dateFrom, itemA.dateTo).asMinutes();
  const timeB = calculateDuration(itemB.dateFrom, itemB.dateTo).asMinutes();
  return timeB - timeA;
}

function sortByPrice(itemA, itemB) {
  return itemB.basePrice - itemA.basePrice;
}

function sortMap(map, sortingFn) {
  return new Map(
    [...map].sort((itemA, itemB) => sortingFn(itemA[1], itemB[1]))
  );
}

export {
  getRandomNumber,
  getRandomArrayElement,
  transformDate,
  getDuration,
  isKeyEscape,
  startStringWithCapital,
  sortByTime,
  sortByPrice,
  sortMap,
};
