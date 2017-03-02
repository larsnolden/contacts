/*Card
    Image
    changebutton*/

import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return (
      <div className="card">
        <Avatar path={this.props.contact.avatar} />
        
        <ul className="info">
          <li><h3>{this.props.contact.name} {this.props.contact.last}</h3></li>
          <li>{this.props.contact.phone}</li>
          <li>{this.props.contact.email}</li>
          <li>{this.props.contact.street}, {this.props.contact.postal} {this.props.contact.city}, {this.props.contact.state} {this.props.contact.country}</li>
          <li>"{this.props.contact.notes}"</li>
        </ul>
      </div>
    );
  }
}

const Avatar = ({ path }) => (
  <img className="avatar" alt='avatar' src={ path } />
);

export default Card