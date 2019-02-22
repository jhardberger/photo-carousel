import React from 'react';

const Display = (props) => {
	console.log(props.photos, '<--- photos?');
	const allPhotos = props.photos.map((photo, i) => {
		return(
			<div className='photo-wrapper' key={i}>
				<img src={photo.url} alt={photo.title} className='photo' />
				<h4>{photo.title}</h4>
			</div>
		)
	})

	return(
		<div className='display'>
			<h1>Display here, baby</h1>
			<div className='all-photos'>
				{allPhotos}
			</div>
		</div>
	)
}
export default Display;
