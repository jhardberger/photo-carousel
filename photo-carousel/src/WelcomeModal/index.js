import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const WelcomeModal = (props) => {
	return(
		<div className='welcome'>
			<Modal basic open={props.showModal}>
				<Modal.Header>
					<h1 className='modal-header'>Welcome!</h1>
				</Modal.Header>
				<Modal.Actions className='modal-button'>
					<Button 
						basic 
						color='black' 
						inverted 
						onClick={props.handleShowModal}
					>
						Enter
					</Button>
				</Modal.Actions>	
			</Modal>
		</div>
	)
}
export default WelcomeModal;