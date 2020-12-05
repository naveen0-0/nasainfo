import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
            <div className="nav">
                <Link className="navtitle" to="/">SpaceStuff</Link>

                <div className="links">
                    <Link to="/asteroids" className="link">Asteroids</Link>
                    <Link to="/a" className="link">A</Link>
                    <Link to="/b" className="link">B</Link>
                    <Link to="/c" className="link">C</Link>
                </div>

            </div>
    )
}
