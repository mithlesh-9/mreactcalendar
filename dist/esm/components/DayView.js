import React from 'react';
import { getAllHours } from '../utils/utils';
export default function DayView(_ref) {
  var date = _ref.date,
      onPrevDay = _ref.onPrevDay,
      onNextDay = _ref.onNextDay,
      dayviewstart = _ref.dayviewstart,
      dayviewend = _ref.dayviewend,
      getDayEvents = _ref.getDayEvents;

  var hoursInBetween = function hoursInBetween() {
    var hours = getAllHours(dayviewstart, dayviewend);
    return hours.map(function (hour) {
      return /*#__PURE__*/React.createElement("div", {
        className: "hour",
        key: hour
      }, /*#__PURE__*/React.createElement("div", {
        className: "hour-space"
      }, /*#__PURE__*/React.createElement("span", {
        id: "hour-txt"
      }, hour)), /*#__PURE__*/React.createElement("div", {
        className: "hour-space"
      }));
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "_heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPrevDay();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/left.svg?alt=media&token=17019ae5-6b59-4c78-80f4-a2cf6d8a18ff",
    alt: "prev"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "month-name",
    style: {
      fontSize: '1.8em'
    }
  }, date), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onNextDay();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/right.svg?alt=media&token=17d7b4e9-2304-4480-8de3-62d6ffb600b4",
    alt: "next"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "day-view"
  }, hoursInBetween(), /*#__PURE__*/React.createElement("div", {
    className: "_day_events"
  }, getDayEvents)));
}