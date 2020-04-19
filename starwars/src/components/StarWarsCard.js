import React from "react";
import style from "styled-components"
import {
  Col, 
  Card, 
  CardBody, 
} from "reactstrap";

const StarWarsCard = ({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}) => {

  const Entry = style.div`
    background: #C0A080;
    color: white;
    border: 4px double white;
    border-radius: 5%;
    `

    const margin = {
      margin: '2%',
    }

    const padding = {
      padding: '1%',
    }
  
  return (
    <Col lg="6">
     <Card style={margin}>
      <CardBody style={padding}>
        <Entry>
          <h2>Name: {name}</h2>
          <p>Height: {height}</p>
          <p>Mass: {mass}</p>
          <p>Hair Color: {hair_color}</p>
          <p>Skin Color: {skin_color}</p>
          <p>Eye Color: {eye_color}</p>
          <p>Born: {birth_year}</p>
          <p>Gender: {gender}</p>
          </Entry>
        </CardBody>
      </Card>
    </Col>
  )
}

export default StarWarsCard;