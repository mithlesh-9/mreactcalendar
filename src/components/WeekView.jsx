import React from 'react';

import moment from 'moment'
import { 
    getWeekDate
} from '../utils/utils'


export default function WeekView({  onPrevWeek,
                                    onNextWeek,
                                    weekdaysShort,
                                    dateObject,
                                    weekText,
                                    daysInWeekView
                                }) {

    const renderWeekDays = () => {
        const today = moment().format("l")
        return weekdaysShort.map((day,i) => {
            const DateString = new Date(getWeekDate(i,dateObject)).toDateString().split(' ')
            return (
            <th key={day} className={`week-day${today === getWeekDate(i, dateObject) ? ' today ' : ''} _week_view_th`}>
                <div>{day}</div>
                <div className="date">{`${DateString[1]} ${Number(DateString[2])}`}</div> 
            </th>
        )})
    }       
    

    return (
        <div>
            <div className="_heading">
                <div>
                <button onClick={()=>onPrevWeek()}><img src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/left.svg?alt=media&token=17019ae5-6b59-4c78-80f4-a2cf6d8a18ff" height="25" width="25" alt="prev" /></button>
                </div>
                    <div className="month-name" style={{fontSize:'1.8em'}}>{weekText}</div>
                <div>
                <button onClick={()=>onNextWeek()}><img src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/right.svg?alt=media&token=17d7b4e9-2304-4480-8de3-62d6ffb600b4" height="25" width="25"  alt="next" /></button>
                </div>
            </div>
            <table className="_calendar_table" cellPadding={0}>
                <thead>
                <tr style={{border:'1px solid rgb(222, 222, 222)'}}>
                {renderWeekDays()}
                </tr>
                </thead>
                <tbody>
                    <tr style={{border:'1px solid rgb(222, 222, 222)',borderTop:'none'}}>
                    {daysInWeekView()}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}