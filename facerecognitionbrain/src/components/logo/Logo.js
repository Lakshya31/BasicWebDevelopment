import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3">
                    <img alt="Loading Logo..." src={brain} style={{paddingTop:'5px'}} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
