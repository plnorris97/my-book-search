import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "../BookWrapper/BookWrapper.css";
// import { url } from 'inspector';
  
function BookWrapper(props){
  return(
    <Card>
      <CardBody key={props.book.id}>
        <CardImg src={props.book.bookImg} alt="nothing"></CardImg>
        <CardTitle>{props.book.title}</CardTitle>
        <CardSubtitle>by {props.book.authors}</CardSubtitle>
        <CardText>{props.book.description}</CardText>
        <Button id={props.book.selfLink} className="save-btn" onClick={() => this.saveBook(props.book.id)}>Save</Button>
        {/* <Button id={props.book.id} className="view-btn" onClick={url}>View</Button> */}
      </CardBody>
    </Card>
  )
}  
export default BookWrapper;