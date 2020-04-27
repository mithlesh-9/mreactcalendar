"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DayView;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DayView(_ref) {
  var date = _ref.date,
      onPrevDay = _ref.onPrevDay,
      onNextDay = _ref.onNextDay,
      dayviewstart = _ref.dayviewstart,
      dayviewend = _ref.dayviewend,
      getDayEvents = _ref.getDayEvents;

  var hoursInBetween = function hoursInBetween() {
    var hours = (0, _utils.getAllHours)(dayviewstart, dayviewend);
    return hours.map(function (hour) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "hour",
        key: hour
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "hour-space"
      }, /*#__PURE__*/_react.default.createElement("span", {
        id: "hour-txt"
      }, hour)), /*#__PURE__*/_react.default.createElement("div", {
        className: "hour-space"
      }));
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "_heading"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return onPrevDay();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/left.svg?alt=media&token=17019ae5-6b59-4c78-80f4-a2cf6d8a18ff",
    alt: "prev"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "month-name",
    style: {
      fontSize: '1.8em'
    }
  }, date), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return onNextDay();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/right.svg?alt=media&token=17d7b4e9-2304-4480-8de3-62d6ffb600b4",
    alt: "next"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "day-view"
  }, hoursInBetween(), /*#__PURE__*/_react.default.createElement("div", {
    className: "_day_events"
  }, getDayEvents)));
}