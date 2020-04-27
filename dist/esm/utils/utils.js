import moment from 'moment';
export var convert24hrsTo12hrs = function convert24hrsTo12hrs(time) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return time > 12 ? "".concat(time - 12).concat(min ? ":".concat(min < 9 ? "0".concat(min) : min) : '', " PM") : "".concat(time === 0 ? 12 : time).concat(min ? ":".concat(min < 9 ? "0".concat(min) : min) : '', " AM");
};
export var calculateMin = function calculateMin(startH, startM, endH, endM) {
  var start = startH * 60 + startM;
  var end = endH * 60 + endM;
  return end - start;
};
export var doesPrevOverlap = function doesPrevOverlap(s, events) {
  var tempEvents = events;
  var matchedEvents = tempEvents.filter(function (event) {
    var start = new Date(event.start);
    var end = new Date(event.end);
    return s >= start && s < end;
  });
  return matchedEvents.length;
};
export var overLappingItemBefore = function overLappingItemBefore(index, s, events) {
  var tempEvents = events.slice(0, index);
  var matchedEvents = tempEvents.filter(function (event) {
    var start = new Date(event.start);
    var end = new Date(event.end);
    return s >= start && s < end;
  });
  return matchedEvents.length;
};
export var getRowNumber = function getRowNumber(numberDay, blanks) {
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
export var getAllHours = function getAllHours() {
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
export var firstDayOfMonth = function firstDayOfMonth(dateObject) {
  var firstDay = moment(dateObject).startOf('month').format('d');
  return firstDay;
};
export var getWeekDate = function getWeekDate(day, dateObject) {
  var today = moment(dateObject);
  var weekNumber = today.week();
  return moment(today.week(weekNumber).day(day).toDate()).format("l");
};