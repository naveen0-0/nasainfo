import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PictureOfTheDay from './components/PictureOfTheDay';
import './App.css';
import NavBar from './components/NavBar';

//! Components
import Asteroids from './components/Asteroids';
import IndividualAsteroid from './components/IndividualAsteroid';


export default function App() {
    return (
        <Router>
            <NavBar />
            <Route path="/" exact component={PictureOfTheDay} />
            <Route path="/asteroids" component={Asteroids} exact/>
            <Route path="/asteroids/:id" component={IndividualAsteroid}/>
        </Router>
    )
}
