import React from 'react';
import { Modal } from 'semantic-ui-react';

const WelcomeModal = (props) => {
	return(
		<div className='welcome'>
			<Modal basic open={props.showModal}>
				<Modal.Content>
					<div className='title-copy'>
						<h1 className='title'>the carousel</h1>
						<h2>film and digital photography by <a href='johnhardberger.com'>john hardberger</a></h2>
						<div className='enter-button' onClick={props.handleShowModal}>
							<a href='#photos'><h2 className='enter'>enter</h2></a>
						</div>
					</div>			
				</Modal.Content>	
			</Modal>
		</div>
	)
}
export default WelcomeModal;