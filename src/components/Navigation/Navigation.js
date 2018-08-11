import React from 'react';
import Tilt from 'react-tilt';
import brain from './drawing.svg';
import './Logo.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <div className='ma4 mt0'>
          <span style={{display: 'flex', justifyContent: 'flex-start', verticalAlign: 'text-top'}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
              <div className="Tilt-inner pa3"> <img src={brain} alt='Gesture' />
              <h2 className='tr mt0'>
                Gesture
              </h2>
              </div>
            </Tilt>

          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
          </nav>
          </span>
        </div>
      );
    } else {
      return (
        <span>
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
        </span>
      );
    }
}

export default Navigation;
