import React, { PropTypes, Component } from 'react';
import { Button, FormControl, Col, Row, Grid } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleSearch(term) {
    this.props.onSearch(term);
  }

  handleOpenModal() {
    console.log(this.props)
    this.props.openModal();
  }

  render() {
    return (
      <div className="nav">
        <Grid>
        <Row>
          <Col xs={2} sm={1}>
            <AddButton onClick={ this.handleOpenModal }/>
          </Col>
          <Col xs={8} sm={6} md={4}>
            <SearchBar onSubmit={ this.handleSearch } />
          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default Header

const AddButton = ({ onClick }) => (
    <Button bsStyle="primary" onClick={ onClick }>New</Button>
);

AddButton.PropTypes = { onClick: React.PropTypes.func }


const SearchButton = ({ onClick }) => (
  <Button bsStyle="primary" onClick={ onClick }>search</Button>
);

SearchButton.PropTypes = { onClick: React.PropTypes.func }


class SearchBar extends Component {
  //create state for input value
  constructor(props) {
    super(props);

    this.state = {
      value: undefined
    }

    //bind state to update func
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //update input on value change
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.value);
  }

    render() {
      return(
        <div className="flex">
          <FormControl className="noBorder noBorderRad" type="text" placeholder="search" onChange={ this.handleChange } value={ this.state.value } onSubmit={this.handleSubmit} />
          <SearchButton className="noBorder noBorderRad" onClick={ this.handleSubmit }/>
        </div>
      )
    }
  }