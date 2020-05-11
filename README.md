# mreactcalendar

<div align="center">
  <img width="436" heigth="398" src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/Screenshot%20from%202020-04-27%2020-06-23%201.png?alt=media&token=eb6099fa-3354-4f0c-accc-bb3c4c8f1a78">
</div>

## Calendar with day, week and month view for your React app.

* Add events to calendar
* Display Day wise, Week wise and Month wise


## Instructions:
* Install by executing `npm install mreactcalendar` or `yarn add mreactcalendar`.
* Import by adding `import Calendar from 'mreactcalendar'`.
* Use by adding `<Calendar />`. 
* Available props to `Calendar` are : 
  * Use `events` prop to add events to the calendar.
      * `Events` should an array of objects with required property i. e. start, end and title.
  * Other props are: `dayviewstart`, `dayviewend` and `view` though they have default you can change it to provide your default value.
  * In order to enable drag and drop to calendar you can use `dropFromOutside` prop.
  * Events can be clicked and to get the detailed data about data you can pass the prop `eventClicked` which provide access to event data.


## Before you continue

mreactcalendar is under constant development. This documentation is written for mreactcalendar v-2.0.0 .

## Getting started

### Compatibility

Your project needs to use React 16.3 or later.

mreactcalendar uses modern web technologies. That's why it's so fast and lightweight.


### Installation

Add React-Calendar to your project by executing `npm install mreactcalendar` or `yarn add mreactcalendar`.

### Usage

Here's an example of basic usage:

```js
import React, { Component } from 'react';
import Calendar from 'mreactcalendar';

class MyApp extends Component {
  state = {
    events: {
      start: new Date(),
      endt: new Date(),
      title: 'Hey!'
    }
  }

  handleDrop = (event) => {
    // with help of event data you can get access to date property.
  }

  eventPressed = event => {
    // capute the event that has been clicked.
  }
  

  render() {
    return (
      <div>
        <Calendar
          events={this.state.events}
          dropFromOutside={this.handleDrop}
          dayviewstart='6:00'
          dayviewend='20:59'
          eventClicked={this.eventPressed}
        /> 
      </div>
    );
  }
}
```

## Screenshots: 
  <div align="center">
  <img width="436" heigth="398" src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/Screenshot%20from%202020-04-27%2020-06-30%201.png?alt=media&token=da4b3ce2-42da-4d1c-b254-a3dbb03ef8ae">
  <br>
  <img width="436" heigth="398" src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/Screenshot%20from%202020-04-27%2020-06-40%201.png?alt=media&token=f7de3e49-0f89-4fd9-ac02-cae19ab88a67">
</div>
 
