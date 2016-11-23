import React from 'react';
import '../styles/loader.css';

const Loader = ({ message }) => {
    return  (
        <div className="basic-loader">
            <div className="loader-message">
                <div className="loader"></div>
                {message}
            </div>
        </div>
    );
}

export default Loader;