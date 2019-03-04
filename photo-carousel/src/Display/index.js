import React, { Component } from 'react';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

class Display extends Component {
	render(){

		const allPhotos = this.props.photos.map((photo, i) => {
			const offset = 30;
            const odd = i % 2;

            const props = {
                offsetXMin: -offset,
                offsetXMax: offset,
                offsetYMin: -offset,
                offsetYMax: offset,
                slowerScrollRate: !!odd,
            };

            return (
                <Parallax key={i} {...props}>
                	<div className='photo-wrap'>
	                	<img 
	                		alt={photo.name} 
	                		src={photo.url} 
	                		className='photo'
	                	/>
	                </div>
                </Parallax>
            );
        })

		return(
			<div className='display'>
				<h1>Display here, baby</h1>
		
				<ParallaxProvider>
					<div className='all-photos'>
							{allPhotos}
					</div>
					<div className='spacer'>
					</div>
				</ParallaxProvider>

			</div>
		)
	}
}
export default Display;
