import React from 'react';

const NavBar = ({onRouteChange}) => {
  return (
    <nav className="bt bb tc mw7 center mt4 flex">
      <a onClick={() => onRouteChange('home')}
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="#">Home</a>
      <a onClick={() => onRouteChange('practice')}
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="#">Practice</a>
      <a onClick={() => onRouteChange('images')}
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="#">Images</a>
      <a onClick={() => onRouteChange('schedules')}
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="#">Schedules</a>
      <a onClick={() => onRouteChange('tags')}
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="#">Tags</a>
      <a onClick={() => onRouteChange('about')}
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="#">About</a>
    </nav>
  );
}

export default NavBar;
