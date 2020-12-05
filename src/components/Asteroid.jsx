import React,{ useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

export default function Asteroid({ info }) {

    return (
        <div className="asteroid">
            <div className="asteroidName">Name : {info.name}</div>
            <Link to={`asteroids/${info.id}`} className="asteroidLink">ReadMore</Link>
            <div className="asteroidMagnitude">Absolute Magnitude : {info.absolute_magnitude_h}</div>
            {info.is_potentially_hazardous_asteroid? 
                (<div className="danger">It is potentially hazardous</div>)
                :
                (<div className="noDanger">It is not potentially hazardous</div>)}

        </div>
    )
}
