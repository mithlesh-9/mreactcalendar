import React from 'react';

import { 
    getAllHours
} from '../utils/utils'


export default function DayView({  
                                    date,
                                    onPrevDay,
                                    onNextDay,
                                    dayviewstart,
                                    dayviewend,
                                    getDayEvents
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
                <button onClick={()=>onPrevDay()}><img src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/left.svg?alt=media&token=17019ae5-6b59-4c78-80f4-a2cf6d8a18ff" height="25" width="25"  alt="prev" /></button>
                </div>
                    <div className="month-name" style={{fontSize:'1.8em'}}>{date}</div>
                <div>
                <button onClick={()=>onNextDay()}><img src="https://firebasestorage.googleapis.com/v0/b/mithleshyadavcomnp.appspot.com/o/right.svg?alt=media&token=17d7b4e9-2304-4480-8de3-62d6ffb600b4" height="25" width="25"  alt="next" /></button>
                </div>
            </div>
            <div className="day-view">
                {hoursInBetween()}
                <div className="_day_events">
                {getDayEvents}
                </div>                   
            </div>                
        </div>
    )
}