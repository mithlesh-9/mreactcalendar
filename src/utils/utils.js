import moment from 'moment'

export const convert24hrsTo12hrs = (time,min = '') => {
    const meridians = time > 11 ? ' PM' : ' AM'
    return time > 12 ? `${time - 12}${min ? `:${min < 9 ? `0${min}` : min}`: ''}${meridians}` : `${time === 0 ? 12 : time}${min ? `:${min < 9 ? `0${min}` : min}`: ''}${meridians}` 
 }

 export const calculateMin = (startH,startM,endH,endM) => {
    const start = startH * 60 + startM
    const end = endH * 60 + endM
    return end - start
}


export const doesPrevOverlap = (s, events) => {
    let tempEvents = events
    const matchedEvents = tempEvents.filter(event => {
        const start = new Date(event.start)
        const end = new Date(event.end)
        return(s >= start && s < end)
    })
    return matchedEvents.length
}

export const overLappingItemBefore = (index,s, events) => {
    let tempEvents = events.slice(0,index)
    const matchedEvents = tempEvents.filter(event => {
        const start = new Date(event.start)
        const end = new Date(event.end)
        return(s >= start && s < end)
    })
    return matchedEvents.length
}

export const getRowNumber = (numberDay,blanks) => {
    const dayIncBlanks = blanks + Number(numberDay.split('/')[1])

    if(dayIncBlanks <= 7 ) {
        return 1;
    } else if (dayIncBlanks > 7 && dayIncBlanks <= 14) {
        return 2;
    } else if (dayIncBlanks > 14 && dayIncBlanks <= 21) {
        return 3;
    } else if (dayIncBlanks > 21 && dayIncBlanks <= 28) {
        return 4;
    } else {
        return 5;
    }
}
export const getAllHours = (start = '0:00',end = '23:59') => {
    let hours = []
    const startN = Number(start.split(':')[0])
    const endN = Number(end.split(':')[0])
    if(startN < endN ) {
        let i;
        for(i = startN; i <= endN; i++) {
            hours.push(convert24hrsTo12hrs(i))
        }
    }
    return hours
}


export const firstDayOfMonth = (dateObject) => {
    let firstDay = moment(dateObject)
                    .startOf('month')
                    .format('d')
    return firstDay;
}

export const getWeekDate = (day, dateObject) => {
    const today = moment(dateObject);
    const weekNumber = today.week();
    return moment(today.week(weekNumber).day(day).toDate()).format("l")
}

export const getOrdinalInd = number => {
    let num = `${number}`
        num = num[num.length - 1];
    return number % 100 > 10 && number % 100 < 21 ? 'th' 
        : num === '1' ? 'st' : num === '2' ? 'nd' : num === '3' ? 'rd' : 'th'
}