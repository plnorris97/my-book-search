import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Card from '../components/Card'

class Search extends Component {
  state = {
    books: [],
    search: ""
  }

  // Get all books
  lookUpBooks() {
    API.getBooks()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // search field function
  searchInput = event => {
    let search = event.target.value;
    this.setState({
      search: search
    });
  }

  saveResults = input => {
    const working = input.map(element =>{
      let result = {
        title: element.volumeInfo.title,
        author: element.volumeInfo.author,
        bookImg: element.volumeInfo.bookImg,
        link: element.volumeInfo.link,
        description: element.volumeInfo.description,
        id: element.id
      };
      return result;
    })
    this.setState({
      results: working
    });
    console.log(this.state.results);
  }


  searchAPI = event => {
    event.preventDefault();
    const title = this.state.search.replace(/ /g, "+");
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + title
    console.log(url);
    API.googleSearch(url)
      .then(res => {
        this.saveResults(res.data.items);
      })
  }

  // Save results function
  saveBook = event => {
    event.preventDefault();
    console.log(event.target.id)
    const book = event.target.id;
    let result;
    this.state.results.forEach(element => {
      if (element.id === book) {
        result = element
        return result;
      } 
    });

    const input = {
      title: result.title,
      author: result.authors[0],
      description: result.description,
      image: result.bookImg,
      link: result.link
    }

    API.saveBook({input})
      .then(res => this.lookUpBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>My Book Search</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
            <form>
              <Input
                value={this.state.search}
                onChange={this.searchInput}
                name="search"
                placeholder="Search Book"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          {this.state.books.length ? (
            <Col className="results" sm="12" md={{size: 6, offset:3}}>
            <Card books={this.state.results} saveBook={this.saveBook}/>
            </Col>
          ):(
            <Col className="results" sm="12" md={{size: 6, offset: 3}}>
            <h3>Enter a book title to see some results.</h3>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default Search;
