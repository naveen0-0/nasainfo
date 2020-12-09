import axios from 'axios';

//@ FORAMATTING DATE
export const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export const formatYesterDayDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}`
}


//@ PICTURE OF THE DAY
export const pictureOfTheDay = async () => {
    let { data } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=IWzif6oTa6550M09AqRTw8kK3gumG9VfjqR20dnL');
    return data;
}


//@ NEO-FEED
export const neoFeed = async (start_date, end_date) => {
    let { data } = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=IWzif6oTa6550M09AqRTw8kK3gumG9VfjqR20dnL`)
    return data;
}


//@ Neo - Lookup
export const neoLookUp = async (id) => {
    let { data } = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=IWzif6oTa6550M09AqRTw8kK3gumG9VfjqR20dnL`)
    return data;
}


//@ Neo - Browse ### Try to Integrate it Later...###


//@ Natural Events

export const naturalEvents = async () => {
    let { data } = await axios.get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
    return data
}