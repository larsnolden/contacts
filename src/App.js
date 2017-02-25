import React, { Component } from 'react';
import './App.css';

import Header from './Header.js'
import Card from './Card.js'
import contacts from './contacts.json'

import { Col, Row, Grid } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: contacts
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleNewContact = this.handleNewContact.bind(this);
  }

  handleSearch(term) {
    console.log(term);
  }

  handleNewContact() {
    alert('new contact');
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={ this.handleSearch } onNewContact={ this.handleNewContact } />
        { this.state.contacts.map( (contact) => { return <Col xs={12} sm={6} md={4} lg={3}><Card key={contact.key} contact={contact} /></Col>}) }
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

