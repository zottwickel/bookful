import React from 'react';
import StaticHead from './StaticHead/StaticHead';
import BookList from './BookList/BookList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }


  handleSubmit = (e, printType, filter, query) => {
    e.preventDefault();
    const baseurl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const key = 'AIzaSyBnor6hJMb-POF7EvmuEjV2dqMmHqamiog';
    const queryurl = baseurl + query + '&filter=' + filter + '&printType=' + printType + '&key=' + key;
    fetch(queryurl)
      .then(response => response.json())
      .then(data => this.setState({ books: data.items }))
      .catch(err => alert(err.message))
  }

  render() {
    const bookList = this.state.books ? <BookList books={this.state.books} /> : null
    return (
      <div className="App">
        <StaticHead handleSubmit={this.handleSubmit}/>
        {bookList}
      </div>
    );
  }
}

export default App;
