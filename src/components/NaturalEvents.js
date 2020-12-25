import React, { Fragment, useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { naturalEvents } from '../utils/utils';
import Spinner from './Spinner';


const NaturalEvents = () => {

    const [events, setEvents] = useState([]);

    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6983,
        zoom: 10,
        width: "100vw",
        height: "91vh"
    })

    useEffect(() => {
        naturalEvents()
            .then(data => {
                setEvents(data.events)
                console.log(data.events);
            })
            .catch(() => setEvents([]))
    }, [])

    if (!events) {
        return <Spinner />
    }

    return (
        <Fragment>
            <div className="underConstruction">
                Under Construction
            </div>
            <ReactMapGl {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoibmF2ZWVuMC0wIiwiYSI6ImNraWR4cHVldzA0b2Eyd3F1ZGx4OXJjNHEifQ.ku87miTrJw_eaiJLWk8eTA"
                onViewportChange={viewport => setViewport(viewport)}
                mapStyle="mapbox://styles/naveen0-0/ckieakckt3go11ant41jc3nx0">
            </ReactMapGl>
        </Fragment>
    )
}

export default NaturalEvents;


