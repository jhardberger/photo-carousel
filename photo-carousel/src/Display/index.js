import React, { Component } from 'react';

class Display extends Component {
	render(){
		
		const allPhotos = this.props.photos.map((photo, i) => {
			return(
				<div className='photo-wrapper' key={i}>
					<img src={photo.url} alt={photo.location} className='photo' />
					<h4>{photo.location}</h4>
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
}
export default Display;
