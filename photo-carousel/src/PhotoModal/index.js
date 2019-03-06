import React from 'react';
import { Button, Image, Label, Modal } from 'semantic-ui-react';

const PhotoModal = (props) => {
	if (props.currentDisplay){

		const photoTags = props.currentDisplay.tags.map((tag, i) => {
			return (<Label as='a' key={i}>{tag}</Label>)			
		});

		return(
			<div className='display-modal'>
				<Modal basic open={props.showPhoto}>
					<div className='display-inner'>
						<Image src={props.currentDisplay.url} onClick={props.hidePhoto} />
						<div className='tags'>
							<h1>{props.currentDisplay.location}</h1>
							{photoTags}
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