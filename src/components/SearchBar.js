import React, { Component } from 'react';
// the searchbar component will display the searchbar input and automatically search the books when we type in the input
class SearchBar extends Component {
  state = {
    value: ''
  };
  handleChange = event => {
    const val = event.target.value;
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.value}
          placeholder="Search by title or author"
          onChange={this.handleChange}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBar;
