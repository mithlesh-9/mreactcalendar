"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeekDate = exports.firstDayOfMonth = exports.getAllHours = exports.getRowNumber = exports.overLappingItemBefore = exports.doesPrevOverlap = exports.calculateMin = exports.convert24hrsTo12hrs = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convert24hrsTo12hrs = function convert24hrsTo12hrs(time) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return time > 12 ? "".concat(time - 12).concat(min ? ":".concat(min < 9 ? "0".concat(min) : min) : '', " PM") : "".concat(time === 0 ? 12 : time).concat(min ? ":".concat(min < 9 ? "0".concat(min) : min) : '', " AM");
};

exports.convert24hrsTo12hrs = convert24hrsTo12hrs;

var calculateMin = function calculateMin(startH, startM, endH, endM) {
  var start = startH * 60 + startM;
  var end = endH * 60 + endM;
  return end - start;
};

exports.calculateMin = calculateMin;

var doesPrevOverlap = function doesPrevOverlap(s, events) {
  var tempEvents = events;
  var matchedEvents = tempEvents.filter(function (event) {
    var start = new Date(event.start);
    var end = new Date(event.end);
    return s >= start && s < end;
  });
  return matchedEvents.length;
};

exports.doesPrevOverlap = doesPrevOverlap;

var overLappingItemBefore = function overLappingItemBefore(index, s, events) {
  var tempEvents = events.slice(0, index);
  var matchedEvents = tempEvents.filter(function (event) {
    var start = new Date(event.start);
    var end = new Date(event.end);
    return s >= start && s < end;
  });
  return matchedEvents.length;
};

exports.overLappingItemBefore = overLappingItemBefore;

var getRowNumber = function getRowNumber(numberDay, blanks) {
  var dayIncBlanks = blanks + Number(numberDay.split('/')[1]);

  if (dayIncBlanks <= 7) {
    return 1;
  } else if (dayIncBlanks > 7 && dayIncBlanks <= 14) {
    return 2;
  } else if (dayIncBlanks > 14 && dayIncBlanks <= 21) {
    return 3;
  } else if (dayIncBlanks > 21 && dayIncBlanks <= 28) {
    return 4;
  } else {
    return 5;
  }
};

exports.getRowNumber = getRowNumber;

var getAllHours = function getAllHours() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0:00';
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '23:59';
  var hours = [];
  var startN = Number(start.split(':')[0]);
  var endN = Number(end.split(':')[0]);

  if (startN < endN) {
    var i;

    for (i = startN; i <= endN; i++) {
      hours.push(convert24hrsTo12hrs(i));
    }
  }

  return hours;
};

exports.getAllHours = getAllHours;

var firstDayOfMonth = function firstDayOfMonth(dateObject) {
  var firstDay = (0, _moment.default)(dateObject).startOf('month').format('d');
  return firstDay;
};

exports.firstDayOfMonth = firstDayOfMonth;

var getWeekDate = function getWeekDate(day, dateObject) {
  var today = (0, _moment.default)(dateObject);
  var weekNumber = today.week();
  return (0, _moment.default)(today.week(weekNumber).day(day).toDate()).format("l");
};

exports.getWeekDate = getWeekDate;