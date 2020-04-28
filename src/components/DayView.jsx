import React from 'react';

import { 
    getAllHours
} from '../utils/utils'
import Prev from '../../assets/left.svg'
import Next from '../../assets/right.svg'


export default function DayView({  
                                    date,
                                    onPrevDay,
                                    onNextDay,
                                    dayviewstart,
                                    dayviewend,
                                    getDayEvents,
                                    ...rest
                                }) {
    const hoursInBetween = () => {
        const hours = getAllHours(dayviewstart, dayviewend)
        return hours.map(hour => (
            <div className="hour" key={hour}>
                <div className="hour-space"><span id="hour-txt">{hour}</span></div>
                <div className="hour-space"></div>
            </div>
        ))

    }
                                
    
    return (
        <div>
            <div className="_heading">
                <div>
                <button onClick={()=>onPrevDay()}><img src={Prev} height="25" width="25"  alt="prev" /></button>
                </div>
                    <div className="month-name" style={{fontSize:'1.8em'}}>{date}</div>
                <div>
                <button onClick={()=>onNextDay()}><img src={Next} height="25" width="25"  alt="next" /></button>
                </div>
            </div>
            <div className="day-view">
                {hoursInBetween()}
                <div className="_day_events" {...rest}>
                {getDayEvents}
                </div>                   
            </div>                
        </div>
    )
}