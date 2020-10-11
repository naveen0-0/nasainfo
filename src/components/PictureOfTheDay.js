import React,{ useState, useEffect } from 'react';
import Axios from 'axios'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PictureOfTheDay() {
    let [ pictureOfTheDay, setPictureOfTheDay ] = useState({});

    useEffect(()=>{
        async function getPictureOfTheDay(){
            let { data } = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=IWzif6oTa6550M09AqRTw8kK3gumG9VfjqR20dnL`);
            setPictureOfTheDay(data)
        }
        getPictureOfTheDay()
    },[])

    return (
        <div className="pictureOfTheDayContainer">
            <div className="picture">Today's Picture</div>
            <div className="title">{pictureOfTheDay.title}</div>
            <img src={pictureOfTheDay.hdurl} alt="PictureOfTheDay" className="pictureOfTheDay"/>
            <div className="copyright">{pictureOfTheDay.copyright}</div>
            <div className="explanation">
                {pictureOfTheDay.explanation}
            </div>
        </div>
    )
}

