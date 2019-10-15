import React from 'react';

const Navigation = ({OnRouteChange}) => {
    return(
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p className='f3 dim link black underline pa3 pointer' onClick={()=> OnRouteChange('signin')}>SignOut</p>
        </nav>
    );
}

export default Navigation;