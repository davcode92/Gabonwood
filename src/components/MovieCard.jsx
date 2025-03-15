import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
const MovieCard = ({el, del}) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin:"25px" }}>
      <Card.Img variant="top" src={el.image} style={{ height:"25rem" }} />
      <Card.Body style={{ height:"15rem" }}>
        <Card.Title style={{ height:"3rem" }}>{el.name}</Card.Title>
        <Card.Text style={{ height:"5rem" }}>
          {el.date}<br/><StarRating rating={el.rating}/>
        </Card.Text>
        <Button onClick={()=>del(el.id)} variant="danger">Suprimer</Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default MovieCard
