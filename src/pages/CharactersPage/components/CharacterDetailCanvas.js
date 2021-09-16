import React from "react";
import {
    Card,
    Col, Offcanvas,
    Row
} from "react-bootstrap";
import styled from "styled-components";

const StyledCardImage = styled(Card.Img)`
  height: 15rem;
  object-fit: contain;
  box-shadow: 0px 2px 0px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const StyledCanvas = styled(Offcanvas)`
  background: black;
  color: white;
`;
const CharacterDetailCanvas = ({selectedCharacter, setSelectedCharacter}) => {
  return (
    <StyledCanvas
      show={selectedCharacter}
      onHide={() => setSelectedCharacter()}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{selectedCharacter.name}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <StyledCardImage
          className="mb-5"
          variant="bottom"
          src={selectedCharacter.image}
        />
        <Row>
          <Col md="12">
            <p>
              <strong>Status:</strong> {selectedCharacter.status}{" "}
            </p>
            <p>
              <strong>Gender:</strong> {selectedCharacter.gender}{" "}
            </p>
            <p>
              <strong>Species:</strong> {selectedCharacter.species}
            </p>
            <p>
              <strong>Origin:</strong> {selectedCharacter.origin.name}
            </p>
            <p>
              <strong>Location:</strong> {selectedCharacter.location.name}
            </p>
          </Col>
        </Row>
      </Offcanvas.Body>
    </StyledCanvas>
  );
};

export default CharacterDetailCanvas;
