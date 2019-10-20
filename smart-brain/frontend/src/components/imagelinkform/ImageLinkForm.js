import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ OnInputChange, OnPicSubmit }) => {
    return(
        <div>
            <p className="f3">
                {'This Magic Brain will Detect faces in your Picture. Give it a try!'}
            </p>
            <div  className="center">
                <div className='pa4 shadow-1 br3 form center'>
                    <input className="f4 pa2 w-70 center" type="text" placeholder="Enter Image URL" onChange={OnInputChange} />
                    <button className="w-30 grow f4 br3 link pv2 dib white bg-light-purple center" onClick={OnPicSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;