import React,{ useState, useEffect } from 'react';
import Axios from 'axios'; 

export default function PictureOfTheDay() {
    let [ pictureOfTheDay, setPictureOfTheDay ] = useState({});
    let [ imageOrNot, setImageOrNot ] = useState(false)
    let [ available, setAvailable ] = useState(false);

    useEffect(()=>{
        async function getPictureOfTheDay(){
            let { data } = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=IWzif6oTa6550M09AqRTw8kK3gumG9VfjqR20dnL`);
            setPictureOfTheDay(data);
            setAvailable(true)
            if(pictureOfTheDay.media_type === "image"){
                setImageOrNot(true)
            }
        }
        getPictureOfTheDay()
    },[pictureOfTheDay.media_type])

    if(!available){
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="pictureOfTheDayContainer">
            <div className="picture">Today's {imageOrNot? "Picture" : "Video"}</div>
            <div className="title">{pictureOfTheDay.title}</div>
            {imageOrNot? (
                <img src={pictureOfTheDay.hdurl} alt="PictureOfTheDay" className="pictureOfTheDay"/>
            ):(
                <div className="video">
                    <a href={pictureOfTheDay.url} target="_blank" rel="noopener noreferrer" className="actualVideo">Click it to see the video</a>
                </div>
            )}

            <div className="copyright">Copyright by {pictureOfTheDay.copyright}</div>
            <div className="explanation">
                {pictureOfTheDay.explanation}
            </div>
        </div>
    )
}

