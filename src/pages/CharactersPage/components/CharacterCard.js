import React from "react";
import {
    Button,
    Card,
    Col
} from "react-bootstrap";
import styled from "styled-components";
import { Colors } from "../../../config/constants/colors";

const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 10%;
  padding: 1rem;

  &:hover {
    box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2);
    background: ${Colors.secondaryColor};
    color: ${Colors.secondaryText};
  }
`;

const StyledCardImage = styled(Card.Img)`
  height: 15rem;
  object-fit: contain;
  box-shadow: 0px 2px 0px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const StyledButton = styled(Button)`
  background: ${Colors.primaryLogo};
  border: none;
  padding: 0.75rem 3rem;
  &:hover {
    background: ${Colors.primaryColor};
    color: ${Colors.secondaryColor};
  }
`;

const CharacterCard = ({character, setSelectedCharacter}) => {
  return (
    <Col md="4" xs="10" className="px-4 pb-5" key={character.id}>
      <StyledCard>
        <StyledCardImage variant="bottom" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text className="mb-5">
            <strong>Status:</strong> {character.status} <br />
            <strong>Gender:</strong> {character.gender}
            <br />
            <strong>Species:</strong> {character.species}
            <br />
            <strong>Origin:</strong> {character.origin.name}
            <br />
          </Card.Text>
          <StyledButton
            variant="primary"
            className="w-100"
            onClick={() => setSelectedCharacter(character)}
          >
            View Detail
          </StyledButton>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};

export default CharacterCard;
