import React, { useState, useEffect, Fragment } from 'react';
import { formatDate, neoFeed, formatYesterDayDate } from '../utils/utils';
import Asteroid from './Asteroid';


export default function Asteroids() {

    const [todayInfo, setTodayInfo] = useState([]);
    const [yesterdayInfo, setYesterdayInfo] = useState([]);
    const [pDateInfo, setPDateInfo] = useState([]);
    const [available, setAvailable] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const date = new Date();


    useEffect(() => {
        neoFeed(formatDate(date), formatYesterDayDate(date)).then(data => {
            let info = Object.values(data.near_earth_objects);
            setYesterdayInfo(info[0]);
            setTodayInfo(info[1]);
            setAvailable(true)
        })
    }, [date])

    const getAsteroid = (e) => {
        e.preventDefault();
        neoFeed(selectedDate, selectedDate).then(data => {
            let info = Object.values(data.near_earth_objects)
            setPDateInfo(info[0])
        })
    }

    if (!available) {
        return (
            <div className="nopotd">Loading ...</div>
        )
    }

    return (
        <Fragment>
            <div className="today">Today's Asteroids</div>

            <div className="todaysAsteroids">
                {todayInfo.map((data) => <Asteroid info={data} key={data.id} />)}
            </div>

            <div className="yesterday">Yesterday's Asteroids</div>
            <div className="todaysAsteroids">
                {yesterdayInfo.map((data) => <Asteroid info={data} key={data.id} />)}
            </div>

            {/*! Particular Date */}
            <div className="selectDate">Asteroids on a Particular Date</div>
            <form onSubmit={getAsteroid}>
                <input type="date"
                    max={formatDate(new Date())}
                    min="2000-01-01"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)} required />

                <button type="submit" className="search">Search</button>
            </form>

            <div className="todaysAsteroids">
                {pDateInfo.map((data) => <Asteroid info={data} key={data.id} />)}
            </div>
        </Fragment>
    )
}
