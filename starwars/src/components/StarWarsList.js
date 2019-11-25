import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import {Container, Row} from "reactstrap";

const StarWarsList = () => {
    // Add your function name here
  const [info, setInfo] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people") // Your API goes here
      .then(data => {
        setInfo(data.data.results);
      })
      .catch(error => {
        console.log("Whoops go back, thats an error!", error);
      });
    }, []);

  return (
    <Container>
      <Row>
      {info.map(result => {
        return (
          <StarWarsCard
            name={result.name}
            title={result.title}
            height={result.height}
            mass={result.mass}
            hair_color={result.hair_color}
            skin_color={result.skin_color}
            eye_color={result.eye_color}
            birth_year={result.birth_year}
            gender={result.gender}
          />
        );
      })}
      </Row>
    </Container>
    );
  }
export default StarWarsList;