import React, { Component } from 'react';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

class Display extends Component {
	render(){

		const allPhotos = this.props.photos.map((photo, i) => {
			const offset = 50;
            const odd = i % 2;

            const props = {
                offsetXMin: -offset + '%',
                offsetXMax: offset + '%',
                offsetYMin: -offset * odd + '%',
                offsetYMax: offset * odd + '%',
                slowerScrollRate: !!odd,
            };

            return (
                <Parallax key={i} className='file' {...props}>
                	<div className='image-wrapper'>
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
				<div className='all-photos'>
					<ParallaxProvider>
						{allPhotos}
					</ParallaxProvider>
				</div>
			</div>
		)
	}
}
export default Display;
