import React from 'react';

import Nav from '../Nav';
import Title from '../Title';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { StickyContainer, Sticky }    from 'react-sticky';


const Display = (props) => {

	const allPhotos = props.photos.map((photo, i) => {
		const offset = 30;
        const odd = i % 2;

        const properties = {
            offsetXMin: -offset,
            offsetXMax: offset,
            offsetYMin: -offset,
            offsetYMax: offset,
            slowerScrollRate: !!odd,
        };

        return (
            <Parallax key={i} {...properties}>
            	<div className='photo-wrap'>
                	<img 
                		id={'photo-' + i}
                		alt={photo.name} 
                		src={photo.url} 
                		className='photo'
                		onClick={props.displayPhoto}
                	/>
                </div>
            </Parallax>
        );
    })

	return(
		<div className='body'>
            <StickyContainer>
                <Sticky>
                    {({style}) => (
                        <Nav style={style} />
                    )}
                </Sticky>
                <div className='display'>
                    <Title />   
                   
        			<ParallaxProvider>
        				<div className='all-photos'>
        						{allPhotos}
        				</div>
        				<div className='spacer'>
        				</div>
        			</ParallaxProvider>
                </div>
            </StickyContainer>

		</div>
	)
}
export default Display;
