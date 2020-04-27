"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("./utils/utils");

var _MonthView = _interopRequireDefault(require("./components/MonthView"));

var _WeekView = _interopRequireDefault(require("./components/WeekView"));

var _DayView = _interopRequireDefault(require("./components/DayView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Calendar, _PureComponent);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleDrop", function (_ref) {
      var event = _ref.event,
          date = _ref.date;
      console.log(date);

      _this.setState(function (state) {
        return {
          events: [].concat(_toConsumableArray(state.events), [{
            start: (0, _moment.default)(date).format("l"),
            badgeColor: '#0051ff',
            id: state.events.length + 1
          }])
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setToday", function () {
      return _this.setState(function () {
        return {
          dateObject: new Date()
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDropFromOutside", function (e) {
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "eventClicked", function (props) {
      console.log(props);
    });

    _defineProperty(_assertThisInitialized(_this), "renderBlanks", function () {
      var dateObject = _this.state.dateObject;
      var blanks = [];
      var i;
      var prevMDays = (0, _moment.default)(dateObject).subtract(1, 'M').daysInMonth();
      var day = prevMDays;

      for (i = 0; i < (0, _utils.firstDayOfMonth)(dateObject); i++) {
        blanks.push( /*#__PURE__*/_react.default.createElement("td", {
          key: "empty".concat(i),
          className: "calendar-day empty"
        }, /*#__PURE__*/_react.default.createElement("span", null, day)));
        day = day - 1;
      }

      return blanks.reverse();
    });

    _defineProperty(_assertThisInitialized(_this), "getEventsByDate", function (date) {
      var events = _this.state.events;
      return events.filter(function (event) {
        return (0, _moment.default)(event.start).format("l") === (0, _moment.default)(date).format("l");
      });
    });

    _defineProperty(_assertThisInitialized(_this), "daysInMonth", function () {
      var _this$state = _this.state,
          dateObject = _this$state.dateObject,
          displayDay = _this$state.displayDay;
      var year = (0, _moment.default)(dateObject).year();
      var month = (0, _moment.default)(dateObject).month() + 1;
      var daysinmonths = [];
      var d;

      var _loop = function _loop() {
        var fullDate = "".concat(month, "/").concat(d, "/").concat(year);
        var currentDay = d;

        var events = _this.getEventsByDate(fullDate);

        var blanks = _this.renderBlanks().length;

        var day = /*#__PURE__*/_react.default.createElement("td", {
          key: d,
          className: "calendar-day ".concat(fullDate === (0, _moment.default)().format("l") ? 'today' : '', " ").concat(displayDay === currentDay ? 'selected' : '', " ").concat(events.length > 0 ? 'clickable' : ''),
          onClick: function onClick() {
            return events.length > 0 ? _this.displayEvents(events, "row-".concat((0, _utils.getRowNumber)(fullDate, blanks)), currentDay) : _this.emptyFunction();
          },
          onDragOver: _this.onDropFromOutside,
          onDrop: function onDrop(e) {
            var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date(fullDate);
            return _this.handleDrop({
              event: e,
              date: date
            });
          }
        }, events.length > 0 && /*#__PURE__*/_react.default.createElement("small", {
          className: "badge"
        }, events.length), /*#__PURE__*/_react.default.createElement("span", null, d), false && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
          className: "dots"
        }, events.length > 0 && events.map(function (event, i) {
          return /*#__PURE__*/_react.default.createElement("button", {
            key: "b".concat(i),
            className: "dot",
            style: {
              background: event.badgeColor ? event.badgeColor : '#0051ff'
            }
          });
        })), events.length > 10 && /*#__PURE__*/_react.default.createElement("div", {
          className: "more-text"
        }, "+ more...")));

        daysinmonths.push(day);
      };

      for (d = 1; d <= (0, _moment.default)(_this.state.dateObject).daysInMonth(); d++) {
        _loop();
      }

      return daysinmonths;
    });

    _defineProperty(_assertThisInitialized(_this), "daysInWeekView", function () {
      var _this$state2 = _this.state,
          weekdaysShort = _this$state2.weekdaysShort,
          dateObject = _this$state2.dateObject;
      return weekdaysShort.map(function (day, i) {
        var dayDate = (0, _utils.getWeekDate)(i, dateObject);

        var events = _this.getEventsByDate(dayDate);

        return /*#__PURE__*/_react.default.createElement("td", {
          className: "_week_view_td",
          key: "".concat(day, "-").concat(i),
          onDragOver: _this.onDropFromOutside,
          onDrop: function onDrop(e) {
            var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date(dayDate);
            return _this.handleDrop({
              event: e,
              date: date
            });
          }
        }, events.map(function (eventData) {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: eventData.id,
            className: "week-event",
            style: {
              background: eventData.badgeColor ? eventData.badgeColor : '#0051ff'
            },
            onClick: function onClick(event) {
              return _this.eventClicked({
                event: event,
                data: eventData
              });
            }
          }, (0, _moment.default)(eventData.start).format('l'));
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "displayEvents", function (events, row, displayDay) {
      _this.setState(function (state) {
        return {
          displayedEvents: events,
          displayDay: state.displayDay === displayDay ? '' : displayDay,
          displayRow: state.displayRow === row ? displayDay === state.displayDay ? '' : state.displayRow : row
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "emptyFunction", function () {
      return;
    });

    _defineProperty(_assertThisInitialized(_this), "onNext", function () {
      _this.setState(function (state) {
        return {
          dateObject: (0, _moment.default)(state.dateObject).add(1, 'M')
        };
      });

      _this.clearEventsDisplayed();
    });

    _defineProperty(_assertThisInitialized(_this), "onPrev", function () {
      _this.setState(function (state) {
        return {
          dateObject: (0, _moment.default)(state.dateObject).subtract(1, 'M')
        };
      });

      _this.clearEventsDisplayed();
    });

    _defineProperty(_assertThisInitialized(_this), "clearEventsDisplayed", function () {
      _this.setState(function () {
        return {
          displayedEvents: [],
          displayRow: '',
          displayDay: ''
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onNextDay", function () {
      _this.setState(function (state) {
        return {
          dateObject: (0, _moment.default)(state.dateObject).add(1, 'day')
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevDay", function () {
      _this.setState(function (state) {
        return {
          dateObject: (0, _moment.default)(state.dateObject).subtract(1, 'day')
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeView", function (view) {
      return _this.setState({
        view: view
      });
    });

    _defineProperty(_assertThisInitialized(_this), "eventClicked", function (e) {
      console.log(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onNextWeek", function () {
      _this.setState(function (state) {
        return {
          dateObject: (0, _moment.default)(state.dateObject).add(1, 'weeks')
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevWeek", function () {
      _this.setState(function (state) {
        return {
          dateObject: (0, _moment.default)(state.dateObject).subtract(1, 'weeks')
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDayEvents", function (date) {
      var _this$state3 = _this.state,
          dayviewstart = _this$state3.dayviewstart,
          dayviewend = _this$state3.dayviewend;
      var startN = Number(dayviewstart.split(':')[0]);

      var events = _this.getEventsByDate(date).sort(function (a, b) {
        if (a.start < b.start || a.end < b.end) return -1;
        if (a.start > b.start) return 1;
        return 0;
      });

      return events.map(function (event, i) {
        var start = new Date(event.start);
        var end = new Date(event.end);
        var startHour = start.getHours();
        var startMin = start.getMinutes();
        var endHour = end.getHours();
        var endMin = end.getMinutes();
        var paddingFromTop = startHour - startN;
        var height = (0, _utils.calculateMin)(startHour, startMin, endHour, endMin);
        var paddingFromLeft = '0%';
        var matchedNumberOfEvents = (0, _utils.doesPrevOverlap)(start, events);
        var width = matchedNumberOfEvents - 1 !== 0 ? "".concat(100 / matchedNumberOfEvents) : '100';
        var matchedBefore = (0, _utils.overLappingItemBefore)(i, start, events);

        if (matchedNumberOfEvents - 1 > 0) {
          paddingFromLeft = matchedBefore > 0 ? "".concat(width * matchedBefore, "%") : "0%";
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          className: "day-event",
          key: event.id,
          style: {
            top: "".concat(paddingFromTop * 2 * 30 + .99 + startMin, "px"),
            left: "calc(".concat(paddingFromLeft, ")"),
            height: "".concat(height - .99, "px"),
            width: "calc(".concat(matchedBefore > 0 ? width : "".concat(width), "%)"),
            background: 'rgba(255, 227, 168, 0.79)',
            outline: 'rgb(233, 169, 40) solid .1px'
          },
          onClick: function onClick(e) {
            return _this.eventClicked({
              event: e,
              data: event
            });
          }
        }, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.convert24hrsTo12hrs)(startHour, startMin)), /*#__PURE__*/_react.default.createElement("span", {
          className: "text"
        }, "Hello"), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.convert24hrsTo12hrs)(endHour, endMin)));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderView", function () {
      var totalSlots = [].concat(_toConsumableArray(_this.renderBlanks()), _toConsumableArray(_this.daysInMonth()));
      var _this$state4 = _this.state,
          months = _this$state4.months,
          dateObject = _this$state4.dateObject,
          view = _this$state4.view,
          weekdaysShort = _this$state4.weekdaysShort,
          displayedEvents = _this$state4.displayedEvents,
          displayRow = _this$state4.displayRow,
          dayviewstart = _this$state4.dayviewstart,
          dayviewend = _this$state4.dayviewend;

      switch (view) {
        case "month":
          return /*#__PURE__*/_react.default.createElement(_MonthView.default, {
            onPrev: _this.onPrev,
            onNext: _this.onNext,
            weekdaysShort: weekdaysShort,
            totalSlots: totalSlots,
            displayedEvents: displayedEvents,
            displayRow: displayRow,
            date: "".concat(months[(0, _moment.default)(dateObject).month()], ", ").concat((0, _moment.default)(dateObject).year()),
            eventClicked: _this.eventClicked
          });

        case "week":
          return /*#__PURE__*/_react.default.createElement(_WeekView.default, {
            weekdaysShort: weekdaysShort,
            onPrevWeek: _this.onPrevWeek,
            onNextWeek: _this.onNextWeek,
            weekText: "Week ".concat((0, _moment.default)(dateObject).week(), " of ").concat((0, _moment.default)(dateObject).year()),
            dateObject: dateObject,
            daysInWeekView: _this.daysInWeekView
          });

        case "day":
          return /*#__PURE__*/_react.default.createElement(_DayView.default, {
            date: " ".concat((0, _moment.default)(dateObject).format("MMMM Do YYYY")),
            onPrevDay: _this.onPrevDay,
            onNextDay: _this.onNextDay,
            dayviewstart: dayviewstart,
            dayviewend: dayviewend,
            getDayEvents: _this.getDayEvents(dateObject)
          });

        default:
          return null;
      }
    });

    _this.state = {
      weekdaysShort: _moment.default.weekdaysShort(),
      dateObject: new Date(),
      months: _moment.default.months(),
      displayedEvents: [],
      displayRow: '',
      displayDay: '',
      view: 'month',
      dayviewstart: '6:00',
      dayviewend: '20:59',
      events: [{
        id: 1,
        title: 'hello',
        start: new Date('4/21/2020').setHours(10),
        end: new Date().setHours(11)
      }]
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var view = this.state.view;

      if (view !== prevState.view) {
        this.clearEventsDisplayed();
        this.setToday();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var view = this.state.view;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "btns-group"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "today-btn inverted".concat(view === 'month' ? ' selected' : ''),
        onClick: function onClick() {
          return _this2.changeView('month');
        }
      }, "Month"), /*#__PURE__*/_react.default.createElement("button", {
        className: "today-btn inverted".concat(view === 'week' ? ' selected' : ''),
        onClick: function onClick() {
          return _this2.changeView('week');
        }
      }, "Week"), /*#__PURE__*/_react.default.createElement("button", {
        className: "today-btn inverted".concat(view === 'day' ? ' selected' : ''),
        onClick: function onClick() {
          return _this2.changeView('day');
        }
      }, "Day")), /*#__PURE__*/_react.default.createElement("div", {
        className: "btns-group",
        style: {
          justifyContent: 'flex-start',
          marginTop: '.5em'
        }
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "today-btn",
        onClick: this.setToday,
        style: {}
      }, "Today")), this.renderView());
    }
  }]);

  return Calendar;
}(_react.PureComponent);

var _default = Calendar;
exports.default = _default;