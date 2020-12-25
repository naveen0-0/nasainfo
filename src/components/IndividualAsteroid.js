import React, { useEffect, useState } from 'react';
import { neoLookUp } from '../utils/utils';
import Spinner from './Spinner';

export default function IndividualAsteroid({ match }) {


    const [available, setAvailable] = useState(false);
    const [asteroid, setAsteroid] = useState({});

    useEffect(() => {
        neoLookUp(match.params.id)
            .then(data => {
                setAsteroid(data)
                setAvailable(true)
                console.log(data.orbital_data)
            })
            .catch(() => console.log("Error"))
    }, [match.params.id])

    if (!available) {
        return <Spinner/>
    }

    return (
        <div className="indiasteroid">
            <div className="indiasteroidName">Name : <span>{asteroid.name}</span></div>
            <div className="indiid">Asteroid_id : <span>{asteroid.id}</span></div>
            <div className="designation">Designation : <span>{asteroid.designation}</span></div>
            <div className="diameter">Estimated Diameter</div>
            <table>
                <thead>
                    <tr>
                        <td>Min</td>
                        <td>Max</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)}(km)</th>
                        <th>{asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}(km)</th>
                    </tr>
                    <tr>
                        <th>{asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(3)}(m)</th>
                        <th>{asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(3)}(m)</th>
                    </tr>
                    <tr>
                        <th>{asteroid.estimated_diameter.miles.estimated_diameter_min.toFixed(3)}(miles)</th>
                        <th>{asteroid.estimated_diameter.miles.estimated_diameter_max.toFixed(3)}(miles)</th>
                    </tr>
                    <tr>
                        <th>{asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(3)}(ft)</th>
                        <th>{asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(3)}(ft)</th>
                    </tr>
                </tbody>
            </table>

            {/*! Table Ended */}

            {asteroid.is_potentially_hazardous_asteroid? 
                (<div className="indiDanger">It is potentially hazardous</div>)
                :
                (<div className="indiNoDanger">It is not potentially hazardous</div>)}


                <div className="info">Orbit_id : <span className="infoValue">{asteroid.orbital_data.orbit_id}</span></div>

                <div className="info">Orbit_Determination_Date : <span className="infoValue">{asteroid.orbital_data.orbit_determination_date}</span></div>

                <div className="info">First_Observation_Date : <span className="infoValue">{asteroid.orbital_data.first_observation_date}</span></div>

                {/*@wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

                <div className="info">Last_Observation_Date : <span className="infoValue">{asteroid.orbital_data.last_observation_date}</span></div>

                <div className="info">Data_arc_in_days : <span className="infoValue">{asteroid.orbital_data.data_arc_in_days}</span></div>
                <div className="info">Observations_used : <span className="infoValue">{asteroid.orbital_data.observations_used}</span></div>
                <div className="info">Orbit_uncertainty : <span className="infoValue">{asteroid.orbital_data.orbit_uncertainty}</span></div>

                <div className="info">Minimum_orbit_intersection : <span className="infoValue">{asteroid.orbital_data.minimum_orbit_intersection}</span></div>

                <div className="info">Jupiter_tisserand_invariant : <span className="infoValue">{asteroid.orbital_data.jupiter_tisserand_invariant}</span></div>

                <div className="info">Epoch_osculation : <span className="infoValue">{asteroid.orbital_data.epoch_osculation}</span></div>
                <div className="info">Eccentricity<span className="infoValue">{asteroid.orbital_data.eccentricity}</span></div>
                <div className="info">Semi_major_axis<span className="infoValue">{asteroid.orbital_data.semi_major_axis}</span></div>
                <div className="info">Inclination : <span className="infoValue">{asteroid.orbital_data.inclination}</span></div>
                <div className="info">Ascending_node_longitude<span className="infoValue">{asteroid.orbital_data.ascending_node_longitude}</span></div>
                <div className="info">Orbital_period<span className="infoValue">{asteroid.orbital_data.orbital_period}</span></div>
                <div className="info">Perihelion_distance : <span className="infoValue">{asteroid.orbital_data.perihelion_distance}</span></div>
                <div className="info">Perihelion_argument : <span className="infoValue">{asteroid.orbital_data.perihelion_argument}</span></div>
                <div className="info">Aphelion_distance<span className="infoValue">{asteroid.orbital_data.aphelion_distance}</span></div>
                <div className="info">Perihelion_time : <span className="infoValue">{asteroid.orbital_data.perihelion_time}</span></div>
                <div className="info">Mean_anomaly : <span className="infoValue">{asteroid.orbital_data.mean_anomaly}</span></div>
                <div className="info">Mean_motion : <span className="infoValue">{asteroid.orbital_data.mean_motion}</span></div>

                <div className="info">Equinox : <span className="infoValue">{asteroid.orbital_data.equinox}</span></div>
                <div className="info">Orbit_class_type : <span className="infoValue">{asteroid.orbital_data.orbit_class.orbit_class_type}</span></div>
                <div className="info">Orbit_class_description : <span className="infoValue">{asteroid.orbital_data.orbit_class.orbit_class_description}</span></div>
                <div className="info">Orbit_class_range : <span className="infoValue">{asteroid.orbital_data.orbit_class.orbit_class_range}</span></div>

                {asteroid.is_sentry_object?
                (<div className="info">This is a Sentry Object</div>):<div className="info">This is not a Sentry Object</div>
                }
            
                <div className="jpl"><a href={asteroid.nasa_jpl_url} target="blank" rel="norefeffer noopener">Read More</a></div>
        </div>
    )
}
