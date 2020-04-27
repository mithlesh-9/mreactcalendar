import React from 'react';


export default function MonthView({onPrev,
                                    onNext,
                                    weekdaysShort,
                                    totalSlots,
                                    displayRow,
                                    displayedEvents,
                                    date,
                                    eventClicked
                                }) {

    let rows = []
    let cells = []

    totalSlots.forEach((row,i) => {
        if(i % 7 !== 0) {
            cells.push(row)
        } else {
            rows.push(cells)
            cells = []
            cells.push(row)
        }
        if(i === totalSlots.length - 1) {
            if(cells.length === 7) {
                rows.push(cells)
            } else {
                let d = 1;
                for(let i = cells.length; i < 7; i++) {
                    cells.push(<td key={`e${d}`} className="calendar-day empty"><span>{d}</span></td>)
                    d = d + 1;
                }
                rows.push(cells)
            }
        }
    })

    const renderDays = () => {
        return weekdaysShort.map(day => (
            <th key={day} className="week-day">
                {day}
            </th>
        ))
    }
    const daysinmonth = rows.map((d,i) => {
        if(i !== 0) {
        return (
        <React.Fragment key={i}>
        <tr>
            {d}
        </tr>
        {displayedEvents.length  > 0 && displayRow === `row-${i}` &&
        <tr>
            <td colSpan="7" className="events-display">
                    {displayedEvents.map((eventData,i) => (<div key={eventData.id} onClick={(event)=>eventClicked({event,data:eventData})} className="displayed-event"><button style={{backgroundColor: eventData.badgeColor ? eventData.badgeColor : '#0051ff' }} className="event-detail-badge"></button>{eventData.title}</div>))}
            </td>
        </tr>
        }
        </React.Fragment>
        )} else return null;
    })
    return (
        <div>
            <div className="_heading">
                <div>
                <button onClick={()=>onPrev()} aria-label="Previous"><img src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/left.svg?alt=media&token=17019ae5-6b59-4c78-80f4-a2cf6d8a18ff" height="25" width="25" alt="prev" /></button>
                </div>
                    <div className="month-name">{date}</div>
                <div>
                <button onClick={()=>onNext()} aria-label="Next"><img src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/right.svg?alt=media&token=17d7b4e9-2304-4480-8de3-62d6ffb600b4" height="25" width="25" alt="next" /></button>
                </div>
            </div>
            <table className="_calendar_table" cellPadding={0}>
                <thead>
                <tr>
                {renderDays()}
                </tr>
                </thead>
                <tbody>
                {daysinmonth}
                </tbody>
            </table>
        </div>
    )
}