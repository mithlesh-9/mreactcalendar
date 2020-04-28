import React from 'react';

import moment from 'moment'
import { 
    getWeekDate,
    getOrdinalInd
} from '../utils/utils'
import Prev from '../../assets/left.svg'
import Next from '../../assets/right.svg'

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
                <div className="date">{`${Number(DateString[2])}${getOrdinalInd(Number(DateString[2]))} ${DateString[1]}`}</div> 
            </th>
        )})
    }       
    

    return (
        <div>
            <div className="_heading">
                <div>
                <button onClick={()=>onPrevWeek()}><img src={Prev} height="25" width="25" alt="prev" /></button>
                </div>
                    <div className="month-name" style={{fontSize:'1.8em'}}>{weekText}</div>
                <div>
                <button onClick={()=>onNextWeek()}><img src={Next} height="25" width="25"  alt="next" /></button>
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