import React, { Component } from 'react';
import './App.css';

import Header from './Header.js'
import Card from './Card.js'
import CreateContactModal from './CreateContactModal.js';
import contacts from './contacts.json'

import { Col, Row, Grid } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: contacts,
      contactsFiltered: contacts,
      showModal: false
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleNewContact = this.handleNewContact.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  //when search is executed
  handleSearch(term) {
    let contactsFiltered = this.state.contacts.filter( (contact) => Object.values(contact).some( (blob) => blob.includes(term)));
    this.setState({
      contactsFiltered: contactsFiltered
    })
  }

  //when new contact is submitted
  handleNewContact(contact) {
   addContact(contact);
   this.closeModal();
  }

  openModal() {
    console.log('openModal')
    this.setState({
      showModal: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={ this.handleSearch } openModal={ this.openModal }/>
        <div className="contacts">
          { this.state.contactsFiltered.map( (contact) => { return <Card key={ contact.key } contact={ contact } />}) }
        </div>
          <CreateContactModal closeModal={ this.closeModal } showModal={ this.state.showModal } onSubmit={ this.handleNewContact }/>
      </div>
    );
  }
}

export default App;


//please refactor me, im not working
const Cards = ( {contacts} ) => {
 contacts.map( (contact) => {
      return <Card contact={contact} />
    });
}

const addContact = (contact) => {
  contacts.push(contact);
}

// own some func for objects
 Object.prototype.some = (toEval) => {
    let boolArr = Object.map( (item) => {
      return toEval
    });
    return boolArr.includes(true)
  }