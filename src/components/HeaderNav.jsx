import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import StarRating from './StarRating';


const HeaderNav = ({searchfunction,text,ratefun,ratef}) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">GABONWOOD</Navbar.Brand>
        <div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Recheche..."
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={searchfunction}
            
            />
          </Form>
          <StarRating ratefun={ratefun} rating={ratef}/>
          </div>
        </Container>
    </Navbar>
    </div>
  )
}

export default HeaderNav
