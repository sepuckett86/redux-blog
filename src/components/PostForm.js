import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  onChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.title, this.state.body);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label>
          Title: 
          <input name="title" type="text" onChange={this.onChange} />
        </label>
        <label>
          Body: 
          <input name="body" type="text" onChange={this.onChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

