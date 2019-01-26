import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "../BookWrapper/BookWrapper.css";
import "../../pages/Search";
import ViewBtn from '../ViewBtn/ViewBtn';
  
function BookWrapper(props){

  return(
    <Card>
      <CardBody key={props.book.id}>
        <CardImg src={props.book.bookImg} alt="nothing"></CardImg>
        <CardTitle>{props.book.title}</CardTitle>
        <CardSubtitle>by {props.book.authors}</CardSubtitle>
        <CardText>{props.book.description}</CardText>
        <Button id={props.book.id} className="save-btn" onClick={() => this.saveBook(props.book.link)}>Save</Button>
        <ViewBtn id={props.book.id} className="view-btn">View</ViewBtn>
      </CardBody>
    </Card>
  )
}  
export default BookWrapper;