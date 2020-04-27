import React,{ PureComponent }  from 'react';
import moment from 'moment'
import { 
        convert24hrsTo12hrs,
        calculateMin,
        doesPrevOverlap,
        overLappingItemBefore,
        getRowNumber,
        firstDayOfMonth,
        getWeekDate
    } from './utils/utils'

import MonthView from './components/MonthView'
import WeekView from './components/WeekView'
import DayView from './components/DayView'


class Calendar extends PureComponent {
constructor() {
    super();
    this.state = {
        weekdaysShort: moment.weekdaysShort(),
        dateObject: new Date(),
        months: moment.months(),
        displayedEventsDate:'',
        displayRow: '',
        displayDay:'',
        view:'month',
    }
}
    


    handleDrop = (props) => {
        if(this.props.dropFromOutside) {
            this.props.dropFromOutside(props) 
        }
    }

    setToday = () => this.setState(()=>({dateObject:new Date()}))


    onDragOver = (e) => {
        e.preventDefault()
    }

    eventClicked = (props) => {
        if(this.props.eventClicked) {
            this.props.eventClicked(props)
        }
    }


    renderBlanks = () => {
        const { dateObject }= this.state;
        let blanks = [];
        let i;
        const prevMDays = moment(dateObject).subtract(1,'M').daysInMonth();
        let day = prevMDays 
        for (i = 0; i < firstDayOfMonth(dateObject);i++) {
            blanks.push(
                <td key={`empty${i}`} className="calendar-day empty">
                    <span>{day}</span>
                </td>
            )
            day = day - 1;
        }
        return blanks.reverse()
    }

    getEventsByDate = (date) => {
        if(this.props.events) {
            const {events} = this.props        
            return events.filter(event => new Date(event.start).toDateString() === new Date(date).toDateString() ) || []   
        }
        return [];
    }

    daysInMonth = () => {
        const {dateObject, displayDay } = this.state
        const year = moment(dateObject).year();
        const month = moment(dateObject).month() + 1;
        let daysinmonths = [];
        let d;
        for ( d = 1; d <= moment(this.state.dateObject).daysInMonth(); d++) {
            const fullDate = `${month}/${d}/${year}`
            const currentDay =  d;
            const events = this.getEventsByDate(fullDate)
            const blanks = this.renderBlanks().length;
            const day = (
                        <td key={d} 
                            className={`calendar-day ${fullDate === moment().format("l") ? 'today' : ''} ${displayDay === currentDay ? 'selected' : '' } ${events.length > 0 ? 'clickable' : ''}`} 
                            onClick={() =>
                                events.length > 0 
                                ? this.displayEvents(fullDate,`row-${getRowNumber(fullDate,blanks)}`,currentDay)
                                : this.emptyFunction()
                                }
                                onDragOver={this.onDragOver}
                                onDrop={(e,date = new Date(fullDate)) => this.handleDrop({event:e,date})}
                            
                        >
                            
                            {events.length > 0 && 
                            <small className="_badge">
                            {events.length}
                            </small>
                            }
                            <span>{d}</span>
                            {false &&
                            <>
                            <div className="_dots">
                            {events.length > 0 && events.map((event,i) => (
                                <button key={`b${i}`} className="_dot" style={{background:event.badgeColor ? event.badgeColor : '#0051ff'}}></button>
                            ))}
                            </div>
                            {events.length > 10 && (
                                <div className="_more-text">+ more...</div>
                            )}
                            </>}
                        </td>
            )
            

            daysinmonths.push(day)
        }
        return daysinmonths
    }

    daysInWeekView = () => {
        const {weekdaysShort, dateObject} = this.state;
        return weekdaysShort.map((day,i) => {
            const dayDate = getWeekDate(i, dateObject);
            const events = this.getEventsByDate(dayDate);
            return (
                <td
                  className="_week_view_td" 
                  key={`${day}-${i}`}
                  onDragOver={this.onDropFromOutside}
                  onDrop={(e,date = new Date(dayDate)) => this.handleDrop({event:e,date})}
                >
                    {events.length > 0 && events
                        .sort((a,b)=> {
                            if(a.start < b.start || a.end < b.end) return -1;
                            if(a.start > b.start) return 1;
                            return 0
                            })
                        .map(eventData => (
                        <div 
                            key={eventData.id} 
                            className="week-event" 
                            style={{background:eventData.badgeColor ? eventData.badgeColor : '#0051ff'}}
                            onClick={(event)=>this.eventClicked({event,data:eventData})}
                        >
                            {eventData.title}
                        </div>
                    ))}
                </td>
        )})
    }
    

    displayEvents = (date,row,displayDay) => {

        this.setState(state =>({
            displayedEventsDate: date,
            displayDay: state.displayDay === displayDay ? '' : displayDay,
            displayRow: state.displayRow === row ? displayDay === state.displayDay ? '' : state.displayRow : row
        }))
    }

    emptyFunction = () => {return};

    onNext = () => {
        this.setState((state)=>({
            dateObject: moment(state.dateObject).add(1,'M'),
        }))
        this.clearEventsDisplayed()
    }

    onPrev = () => {
        this.setState((state)=>({
            dateObject: moment(state.dateObject).subtract(1,'M'),
        }))
        this.clearEventsDisplayed()
    }

    clearEventsDisplayed = () => {
        this.setState(()=>({
            displayedEventsDate: '',
            displayRow: '',
            displayDay:'',
        }))
    }
    onNextDay = () => {
        this.setState((state)=>({
            dateObject: moment(state.dateObject).add(1,'day'),
        }))
    }

    onPrevDay = () => {
        this.setState((state)=>({
            dateObject: moment(state.dateObject).subtract(1,'day'),
        }))
    }

    changeView = view => this.setState({view})


    onNextWeek = () => {
        this.setState((state)=>({
            dateObject: moment(state.dateObject).add(1,'weeks'),
        }))
    }
 
    onPrevWeek = () => {
        this.setState((state)=>({
            dateObject: moment(state.dateObject).subtract(1,'weeks'),
        }))
    }



    componentDidUpdate(prevProps,prevState) {
        const { view } = this.state

        if(view !== prevState.view) {
            this.clearEventsDisplayed()
            this.setToday()
        }
    }



    getDayEvents = (date) => {
        const { dayviewstart } = this.props
        let startN = 0
        if(dayviewstart) {
            startN =Number(dayviewstart.split(':')[0]);
        }
        const events = this.getEventsByDate(date)

        return events.length > 0 && events
                .sort((a,b)=> {
                    if(a.start < b.start || a.end < b.end) return -1;
                    if(a.start > b.start) return 1;
                    return 0
                })
                .map((event,i) => {
            const start = new Date(event.start)
            const end = new Date(event.end)
            const startHour = start.getHours()
            const startMin = start.getMinutes()
            const endHour = end.getHours()
            const endMin = end.getMinutes()
            const paddingFromTop = startHour - startN 
            const height = calculateMin(startHour,startMin,endHour,endMin)
            let paddingFromLeft = '0%'
            const matchedNumberOfEvents =  doesPrevOverlap(start,events)
            const width =  matchedNumberOfEvents - 1 !== 0 ? `${100/(matchedNumberOfEvents)}` : '100'
            const matchedBefore = overLappingItemBefore(i,start,events)
            if(matchedNumberOfEvents - 1 > 0 ) {
                paddingFromLeft = matchedBefore > 0 ? `${width * matchedBefore}%`  : `0%`
            }
            return (
            <div 
                className="day-event"
                key={event.id}
                style={{
                top:`${paddingFromTop * 2 * 30 + .99 + startMin}px`,
                left:`calc(${paddingFromLeft})`,
                height:`${height - .99}px`,
                width:`calc(${matchedBefore > 0 ? width : `${width}`}%)`,
                background:'rgba(255, 227, 168, 0.79)',
                outline: 'rgb(233, 169, 40) solid .1px'
                }}
                onClick={(e)=>this.eventClicked({event:e,data:event})}
             >
                <span>{convert24hrsTo12hrs(startHour,startMin)}</span>
                <span className="text">{event.title}</span>
                <span>{convert24hrsTo12hrs(endHour,endMin)}</span>
             </div>)
            })
    }


    renderView = () => {
        const totalSlots = [...this.renderBlanks(),...this.daysInMonth()]
        const { months, 
            dateObject, 
            view, 
            weekdaysShort,
            displayedEventsDate, 
            displayRow,
            } = this.state
        const { 
            dayviewstart,
            dayviewend } = this.props
        let displayedEvents = []; 
        if(displayedEventsDate) {
            displayedEvents = this.getEventsByDate(displayedEventsDate);
        }
        switch (view) {
            case "month":
                return (
                <MonthView 
                    onPrev={this.onPrev}
                    onNext={this.onNext}
                    weekdaysShort={weekdaysShort}
                    totalSlots={totalSlots}
                    displayedEvents={displayedEvents}
                    displayRow={displayRow}
                    date={`${months[moment(dateObject).month()]}, ${moment(dateObject).year()}`}
                    eventClicked={this.eventClicked}
                />)
            case "week":
                return (
                <WeekView
                    weekdaysShort={weekdaysShort}
                    onPrevWeek={this.onPrevWeek}
                    onNextWeek={this.onNextWeek}
                    weekText={`Week ${moment(dateObject).week()} of ${moment(dateObject).year()}`}
                    dateObject={dateObject}
                    daysInWeekView={this.daysInWeekView}
                />)

            case "day":
                return (
                <DayView
                    date={` ${moment(dateObject).format("MMMM Do YYYY")}`}
                    onPrevDay={this.onPrevDay}
                    onNextDay={this.onNextDay}
                    dayviewstart={dayviewstart}
                    dayviewend={dayviewend}
                    getDayEvents={this.getDayEvents(dateObject)}
                /> 
                )
                
        
            default:
                return null;
        }
    }

render() {
    const { view } = this.state
    return (
        <div>
            <div className="btns-group">
                <button className="today-btn" onClick={this.setToday} style={{}}>Today</button>
                <div>
                <button className={`today-btn inverted${view === 'month' ? ' selected': ''}`} onClick={()=>this.changeView('month')}>Month</button>
                <button className={`today-btn inverted${view === 'week' ? ' selected': ''}`} onClick={()=>this.changeView('week')}>Week</button>
                <button className={`today-btn inverted${view === 'day' ? ' selected': ''}`} onClick={()=>this.changeView('day')}>Day</button>
                </div>
            </div>
            {this.renderView()}
        </div>
      );
}
  
}

export default Calendar;
