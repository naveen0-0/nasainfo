import React,{ Fragment, useEffect, useState } from 'react';
import { pictureOfTheDay } from '../utils/utils';

export default function PitureOfTheDay() {

    const [ potd, setPotd ] = useState({});
    const [ notAvailable, setNotAvailable ] = useState(false);
    const date = new Date().toLocaleDateString();

    useEffect(()=>{
        pictureOfTheDay()
        .then(data=>{setPotd(data);console.log(data)})
        .catch(()=>{setNotAvailable(true)})
    },[])

    if(notAvailable){
        return (
                <div className="nopotd">No Picture Of The Day For {date}<br/>😥😥😥😥</div>
        )
    }

    if(potd.media_type==="image"){
      return (
        <Fragment>
          <div className="title">{potd.title}</div>
          <img src={potd.hdurl} alt={potd.title} className="picture"/>
          {potd.copyright?(<div className="copyright">Copyright by <span>{potd.copyright}</span></div>):null}
          <div className="explanation">{potd.explanation}</div>
        </Fragment>
      );
    }

    return(
      <Fragment>
          <div className="title">{potd.title}</div>
          <div className="explanation">This is a Video</div>
          {potd.copyright?(<div className="copyright">Copyright by <span>{potd.copyright}</span></div>):null}
          <div className="explanation">{potd.explanation}</div>
        </Fragment>
    )

}
