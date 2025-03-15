import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddMovie = ({add}) => {
//---------------------------------INPUTS STATES-------------------------------------------
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [date, setDate] = useState("");
const [rating, setRating] = useState(1);

//------------------------------------------------------------------------------------------


const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//----------------------------Functions-------------------------------------------
const handleSubmit = (e) =>{
  e.preventDefault();
  const newMovie = {
    id: Math.random(),
    name: name,
    image: image,
    date:date,
    rating: rating,
  };
  if(name && image && date && rating){
    add(newMovie);
  handleClose();
}else alert("Fournissez toutes les informations demandées!")
};


return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un Film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter les informations du film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Titre du film:</label>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="">Image du film:</label>
            <input type="text" 
            value={image}
            onChange={(e) => setImage(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="">Date de sortie:</label>
            <input type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="">Notation:</label>
            <input type="text" 
            value={rating}
            onChange={(e) => setRating(e.target.value)} 
            />
          </div><br/>
          <Button variant="primary" type='submit' >
            Sauvegarder
          </Button>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
