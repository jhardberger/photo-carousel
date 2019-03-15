import React from 'react';

import { Icon } 	from 'semantic-ui-react';
import { Waypoint } from 'react-waypoint';

const sayGoodbye = ()=>{
	console.log('goodbye');
}


const Title = () => {
	return(
		<div className='title-copy'>
			<h1 className='title'>the carousel</h1>
			<h2>film and digital photography by <a href='johnhardberger.com'>john hardberger</a></h2>
			<h2 className='scroll'>scroll</h2>
			<Icon size='large' name='chevron down' className='scroll-arrow' color='white'/>	
			<Waypoint onLeave={sayGoodbye}/>
		</div>
	)
}
export default Title;
