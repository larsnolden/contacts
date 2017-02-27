import React, { PropTypes, Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class CreateContactModal extends Component {
  constructor(props) {

    super(props);
    this.state = {
      showModal: false
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState(nextProps)
    }
  }

  handleClose() {
    this.props.closeModal();
  }
 
  render() {
    return(
      <Modal show={ this.state.showModal }>
         <Modal.Header closeButton>
            <Modal.Title>New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.handleClose }>Close</Button>
          </Modal.Footer>
      </Modal>
    );
  }
}

CreateContactModal.PropTypes = { onClose: React.PropTypes.func, showModal: React.PropTypes.bool }

export default CreateContactModal