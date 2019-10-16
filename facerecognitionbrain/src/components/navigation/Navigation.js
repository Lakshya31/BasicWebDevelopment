import React from 'react';

const Navigation = ({OnRouteChange, IsSignedIn}) => {
    if(IsSignedIn){
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p className='f3 dim link black underline pa3 pointer' onClick={()=> OnRouteChange('signin')}>SignOut</p>
            </nav>
        );
    }
    else{
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p className='f3 dim link black underline pa3 pointer' onClick={()=> OnRouteChange('signin')}>Sign In</p>
                <p className='f3 dim link black underline pa3 pointer' onClick={()=> OnRouteChange('register')}>Register</p>
            </nav>
        );
    }
    
}

export default Navigation;