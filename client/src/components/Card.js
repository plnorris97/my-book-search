import React from 'react';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
  
function Card(props){
  return(
    <Card>
      {props.books.map(book =>(
        <CardBody key={book.id}>
          <CardImg src={book.bookImg} alt="nothing"></CardImg>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.authors[0]}</CardSubtitle>
          <CardText>{book.description}</CardText>
          <Button id={book.link} className="saveBook" onClick={(e)=>props.saveBook(e)}>Save</Button>
          <Button id={book.id} className="viewBook" onClick={URL}>View</Button>
        </CardBody>
      ))}
    </Card>
  )
}  
export default Card;