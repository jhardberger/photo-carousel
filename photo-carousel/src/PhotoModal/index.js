import React from 'react';

import { Fade }				from 'react-reveal';
import { Image, Label, Modal } 	from 'semantic-ui-react';

const PhotoModal = (props) => {
	if (props.currentDisplay){

		const photoTags = props.currentDisplay.tags.map((tag, i) => {
			return (<Label as='a' key={i}>{tag}</Label>)			
		});

		return(
			<div className='photo-modal'>
				<Modal basic open={props.showPhoto} >
					<div className='modal-inner' onClick={props.hidePhoto}>
							<div 
								className='hover'
								onMouseOver={props.displayPhotoTraits}
								onMouseLeave={props.hidePhotoTraits}
							>
								<Fade clear when={props.currentDisplay.display} >
									<div className='photo-info'>
										<h1 className='location'>
											{props.currentDisplay.location}
										</h1>
										<Fade right cascade>
											<div className='tags'>
												{photoTags}
											</div>
										</Fade>
										(click photo to exit)
									</div>
								</Fade>
							</div>
						<div className='photo-frame'>
							<Image 
								size='massive'
								src={props.currentDisplay.url} 
								className='photo-display'
							/>
						</div>
					</div>
				</Modal>
			</div>
		)
	}else{
		return(
			<div className='display' />
		)
	}
}

export default PhotoModal;