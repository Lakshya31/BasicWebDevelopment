import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{ 'overflow':'auto', border:'5px solid black', height:'532px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;