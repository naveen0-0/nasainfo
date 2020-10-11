import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PictureOfTheDay from './components/PictureOfTheDay';
import './App.css';
import NavBar from './components/NavBar';


export default function App() {
    return (
        <Router>
            <NavBar/>
            <PictureOfTheDay/>
        </Router>
    )
}
