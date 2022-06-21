import React, { Component } from 'react';
// The bookshelfchanger component will display the bookshelf changer it takes the shelf value as a state
class BookshelfChanger extends Component {
  state = {
    value: this.props.shelf
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onMove(this.props.book, value);
  };
  render() {
    return (
      // creating the dropdown menu for the bookshelf changer
      <div className="changer">
        <select value={this.state.value} onChange={this.handleChange}>
          {/* The move option is disabled  */}
          <option value="move" disabled>
            Move to...
          </option>
          {/* Notive that we give each option a value */}
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
