import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/Grid";
import BookWrapper from "../components/BookWrapper/BookWrapper"

class Library extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
      console.log("Books Loaded!");
    API.getBooks()
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data })
        });
    };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }
 
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Jumbotron>
                            <h1>My Book Library</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    {this.state.results.length ? (
                        this.state.results.map(book => (
                            <BookWrapper className="card-result"
                                book={book} deleteBook = {this.deleteBook}
                            />
                        ))
                    ) : (
                            <Col className="results" sm="12" md={{ size: 6, offset: 3 }}>
                                <h3>Enter a book title to get some results.</h3>
                            </Col>
                        )}
                </Row>
            </Container>
        );
    }
}

export default Library;