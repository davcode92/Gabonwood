import React from 'react'
import {Carousel} from 'react-bootstrap';
import { AdsMovie } from '../moviesData';


const AdsComp = () => {
  return (
    <div>
    <Carousel>
    {AdsMovie.map((el) => (
        <Carousel.Item key={el.id}>
          <img 
          src={el.movieImage} 
          alt="photoz" 
          style={{ width: "auto", height:"800px" }}
          />
        <Carousel.Caption>
          <h3>{el.movieName}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default AdsComp;
