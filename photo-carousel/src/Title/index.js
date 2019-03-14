import React from 'react';

import { Icon } 					from 'semantic-ui-react';

const Title = () => {
	return(
		<div className='copy'>
			<h1 className='title'>the carousel</h1>
			<h2>film and digital photography by <a href='johnhardberger.com'>john hardberger</a></h2>
			<h2 className='scroll'>scroll</h2>
			<Icon size='large' name='chevron down' className='scroll-arrow' color='white'/>		
		</div>
	)
}
export default Title;
