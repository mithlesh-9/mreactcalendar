"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MonthView;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MonthView(_ref) {
  var onPrev = _ref.onPrev,
      onNext = _ref.onNext,
      weekdaysShort = _ref.weekdaysShort,
      totalSlots = _ref.totalSlots,
      displayRow = _ref.displayRow,
      displayedEvents = _ref.displayedEvents,
      date = _ref.date,
      eventClicked = _ref.eventClicked;
  var rows = [];
  var cells = [];
  totalSlots.forEach(function (row, i) {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }

    if (i === totalSlots.length - 1) {
      if (cells.length === 7) {
        rows.push(cells);
      } else {
        var d = 1;

        for (var _i = cells.length; _i < 7; _i++) {
          cells.push( /*#__PURE__*/_react.default.createElement("td", {
            key: "e".concat(d),
            className: "calendar-day empty"
          }, /*#__PURE__*/_react.default.createElement("span", null, d)));
          d = d + 1;
        }

        rows.push(cells);
      }
    }
  });

  var renderDays = function renderDays() {
    return weekdaysShort.map(function (day) {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: day,
        className: "week-day"
      }, day);
    });
  };

  var daysinmonth = rows.map(function (d, i) {
    if (i !== 0) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, d), displayedEvents.length > 0 && displayRow === "row-".concat(i) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        colSpan: "7",
        className: "events-display"
      }, displayedEvents.map(function (eventData, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: eventData.id,
          onClick: function onClick(event) {
            return eventClicked({
              event: event,
              data: eventData
            });
          },
          className: "displayed-event"
        }, /*#__PURE__*/_react.default.createElement("button", {
          style: {
            backgroundColor: eventData.badgeColor ? eventData.badgeColor : '#0051ff'
          },
          className: "event-detail-badge"
        }), eventData.title);
      }))));
    } else return null;
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "_heading"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return onPrev();
    },
    "aria-label": "Previous"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/left.svg?alt=media&token=17019ae5-6b59-4c78-80f4-a2cf6d8a18ff",
    alt: "prev"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "month-name"
  }, date), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return onNext();
    },
    "aria-label": "Next"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/right.svg?alt=media&token=17d7b4e9-2304-4480-8de3-62d6ffb600b4",
    alt: "next"
  })))), /*#__PURE__*/_react.default.createElement("table", {
    className: "_calendar_table",
    cellPadding: 0
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, renderDays())), /*#__PURE__*/_react.default.createElement("tbody", null, daysinmonth)));
}