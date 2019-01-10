import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
  
function BookWrapper(props){
  return(
    <Card>
      <CardBody key={props.book.id}>
        <CardImg src={props.book.bookImg} alt="nothing"></CardImg>
        <CardTitle>{props.book.title}</CardTitle>
        <CardSubtitle>{props.book.author}</CardSubtitle>
        <CardText>{props.book.description}</CardText>
        <Button id={props.book.link} className="saveprops.book" onClick={(e)=>props.saveprops.book(e)}>Save</Button>
        <Button id={props.book.id} className="viewprops.book" onClick={URL}>View</Button>
      </CardBody>
    </Card>
  )
}  
export default BookWrapper;