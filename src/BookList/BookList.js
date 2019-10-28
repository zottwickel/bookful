import React from 'react';
import './BookList.css';

class BookList extends React.Component {
    render() {
        return (
            <div className="bookList">
                <ul>
                    {this.props.books.map((book, i) => {
                        const authors = book.volumeInfo.authors
                        ? book.volumeInfo.authors.map((author, i) => {return <p className="author" key={i}>{author}</p>})
                        : <p>(not available)</p>
                        return (
                        <li className="bookItem" key={i}>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="An image of a book" />
                            <h2 className="bookTitle"><a href={book.volumeInfo.infoLink}>{book.volumeInfo.title}</a></h2>
                            <h3 className="authors">Authors: </h3>
                            {authors}
                            <p className="description">{book.volumeInfo.description}</p>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BookList;