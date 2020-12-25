import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={require('../images/loading.gif')} alt="Loading"/>
        </div>
    )
}

export default Spinner
