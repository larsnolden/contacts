/*Card
    Image
    changebutton*/

import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <Avatar path={this.props.contact.avatar} />
        <h3>{this.props.contact.name}</h3>
        <div className="info">
          <p>adress: {this.props.contact.adress}</p>
        </div>
      </div>
    );
  }
}

const Avatar = ({ path }) => (
  <img className="avatar" alt='avatar' src={ path } />
);

export default Card