import React, { PropTypes, Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import contacts from './contacts.json'


class CreateContactModal extends Component {
  constructor(props) {

    super(props);
    this.state = {
      showModal: false,
      form: {}
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState(nextProps)
    }
  }

  handleClose() {
    this.setState({
      showModal: false
    })
    this.props.closeModal();
  }

  handleSubmit(event) {
    event.preventDefault();
    createContact(this.state.form);
  }
  
  //handle input from all the different inputs
  handleChange(event) {
    let stateObject = { form: this.state.form }
    stateObject.form[event.target.name] = event.target.value;
    
    this.setState(stateObject);
  }
 
  render() {

    return(
      <Modal show={ this.state.showModal }>
         <Modal.Header closeButton>
            <Modal.Title>New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form onSubmit={ this.handleSubmit }>

            <FormGroup>
              <ControlLabel>First Name</ControlLabel>
              <FormControl type="text" value={this.state.form.name} name="name" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>Last Name</ControlLabel>
              <FormControl type="text" value={this.state.form.last} name="last" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>E-mail</ControlLabel>
              <FormControl type="text" value={this.state.form.email} name="email" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>Phone</ControlLabel>
              <FormControl type="text" value={this.state.form.phone} name="phone" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>Street</ControlLabel>
              <FormControl type="text" value={this.state.street} name="street" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>Postal</ControlLabel>
              <FormControl type="text" value={this.state.form.postal} name="postal" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>City</ControlLabel>
              <FormControl type="text" value={this.state.form.city} name="city" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>State</ControlLabel>
              <FormControl type="text" value={this.state.form.state} name="state" onChange={this.handleChange} />
            </ FormGroup>

            <FormGroup>
              <ControlLabel>notes</ControlLabel>
              <FormControl type="text" value={this.state.form.notes} name="notes" onChange={this.handleChange} />
            </ FormGroup>

            <Button onClick={ this.handleClose }>Close</Button>
            <Button bsStyle="primary" type="submit">Add</Button>
            </ form>
          </Modal.Body>
        
      </Modal>
    );
  }
}

CreateContactModal.PropTypes = { onClose: React.PropTypes.func, showModal: React.PropTypes.bool }

export default CreateContactModal


function createContact (contact) {
 /* for(let entry in contact) {
    if(!entry) {
      entry = 'N/A';
    }
  }*/

  //let contacts = JSON.parse(contacts)
  //let contacts = contacts.push(contact);
  let these = contacts;
   these[these.length] = {"asda":"asdrr"};
  console.log(these)

}