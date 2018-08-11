import React from 'react';
import Tilt from 'react-tilt';
import brain from './drawing.svg';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3"> <img src={brain} alt='Gesture' />
				<h2 className='tr mt0'>
					Gesture
				</h2>
				
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
