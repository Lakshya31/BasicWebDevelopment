import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return(
        <div>
            <p className="f3">
                {'This Magic Brain will Detect faces in your Picture. Give it a try!'}
            </p>
            <div  className="center">
                <div className='pa4 shadow-5 br3 form center'>
                    <input className="f4 pa2 w-70 center" type="text" placeholder="Enter Image URL"></input>
                    <button className="w-30 grow f4 br3 link pv2 dib white n                                                                        bg-light-purple center">Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;