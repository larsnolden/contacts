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
          <li><h3>{ this.props.contact.name } { this.props.contact.last }</h3></li>
          <li>{ this.props.contact.phone || "N/A" }</li>
          <li>{ this.props.contact.email || "N/A" }</li>
          <li>{ this.props.contact.street || "N/A" }, { this.props.contact.postal || "N/A" } { this.props.contact.city || "N/A" }, { this.props.contact.state || "N/A" } { this.props.contact.country || "N/A" }</li>
          <li>"{ this.props.contact.notes || "N/A" }"</li>
        </ul>
      </div>
    );
  }
}

const Avatar = ({ path }) => (
  <img className="avatar" alt='avatar' src={ path } />
);

export default Card