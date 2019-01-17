import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/Grid";
import { Input, FormBtn } from "../components/Form/Form";
import BookWrapper from "../components/BookWrapper/BookWrapper"

class Search extends Component {
  state = {
    books: [],
    search: "",
    results: []
  }

  componentDidMount() {
    this.lookUpBooks();
  }

  // Get all books
  lookUpBooks() {
    API.getBooks()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  searchAPI = event => {
    event.preventDefault();
    const title = this.state.search.replace(/ /g, "+");
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + title + "&maxResults=5"
    console.log(url);
    API.googleSearch(url)
      .then(res => {
      console.log(res);
        // console.log(res.data.items.element.volumeInfo);
        this.saveResults(res.data.items);
      })
  }
  
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.lookUpBooks())
      .catch(err => console.log(err));
  };
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
        authors: element.volumeInfo.authors,
        bookImg: element.volumeInfo.imageLinks.smallThumbnail,
        link: element.selfLink,
        description: element.volumeInfo.description,
        id: element.id
      };
      console.log(result.bookImg);
      this.loadImage(result.bookImg);
      return result;
    })
    
    this.setState({
      results: working 
    });
    console.log(this.state.results);
  }

  loadImage() {
    let image = this.state.bookImg
    // load result
    // check to see if the image exists
    if (image !== undefined) {
      console.log("is working!");
    } else 
      image = "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjNsuXAyejfAhUBJt8KHXCuDQAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.guidedogs.org%2F&psig=AOvVaw2z0mFs_0GWrh5RsGj4CDVu&ust=1547393866010025"
      this.setState({
        bookImg: image
      });
    // if the image exists load it
    // if it doesn't exist load a default image
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
      author: result.authors,
      // description: result.description,
      // image: result.bookImg,
      // link: result.link
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
                onClick={this.searchAPI}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          {this.state.results.length ? (
            this.state.results.map(book => (
              <BookWrapper className="card-result"
                book = {book}
              />
            ))
          ):(
            <Col className="results" sm="12" md={{size:6, offset:3}}>
            <h3>Enter a book title to get some results.</h3>
            </Col>
          )}
        </Row> 
      </Container>
    );
  }
}

export default Search;
