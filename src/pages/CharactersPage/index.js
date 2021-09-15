import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { Colors } from "../../config/constants/colors";
import useDebounce from "../../config/utils/UseDebounce";
import { getCharactersAction } from "../../redux/actions/characters.action";

const StyledDivider = styled.hr`
  color: ${Colors.secondaryColor};
  height: 0.15rem !important;
  margin: 1rem 0;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0;
`;

const SearchContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 0;
  bottom: 0;
  z-index: 9999;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const CharactersPage = () => {
  const [name, setName] = useState();
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState();

  const dispatch = useDispatch();

  const history = useHistory();

  const characters = useSelector((state) => state.characters.data);
  const error = useSelector((state) => state.characters.error);
  const loading = useSelector((state) => state.characters.loading);
  const isNextAvailable = useSelector(
    (state) => state.characters.isNextAvailable
  );

  const debouncedName = useDebounce(name, 500);
  const debouncedGender = useDebounce(gender, 500);

  const [selectedCharacter, setSelectedCharacter] = useState();

  useEffect(() => {
    let queryParams = "";
    if (page) {
      queryParams = `?page=${page}`;
    }
    if (debouncedName) {
      queryParams = queryParams
        ? `${queryParams}&name=${debouncedName}`
        : `?name=${debouncedName}`;
    }
    if (debouncedGender) {
      queryParams = queryParams
        ? `${queryParams}&gender=${debouncedGender}`
        : `?gender=${debouncedGender}`;
    }

    history.push({
      pathname: "/characters",
      ...(page || debouncedName || debouncedGender
        ? { search: queryParams }
        : {}),
    });

    dispatch(getCharactersAction({ page, gender, name }));
  }, [debouncedName, debouncedGender, gender]);
  return (
    <Container>
      <Row className="my-5">
        <StyledDivider />
        <Col md="8" className="m-auto" xs="12">
          <StyledText>Search your favorite character</StyledText>
        </Col>
        <Col md="4" xs="12">
          <Row>
            <Col md="5" className="py-2">
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Select gender"
              >
                <Form.Select onChange={(e) => setGender(e.target.value)}>
                  <option>Any</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md="7" className="py-2">
              <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control
                  type="text"
                  placeholder="Rick..."
                  onChange={(e) => setName(e.target.value)}
                />
                <SearchContainer>
                  <Search />
                </SearchContainer>
              </FloatingLabel>
            </Col>
          </Row>
        </Col>
        <StyledDivider />
      </Row>
      <Row className="justify-content-center">
        {characters?.map((character) => (
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
        ))}
      </Row>
      <Row className="mb-5">
        <StyledDivider />
        <Col md="12" className="d-flex justify-content-center">
          {page > 1 && (
            <StyledButton className="me-3" onClick={() => setPage(page - 1)}>
              Previous
            </StyledButton>
          )}
          {isNextAvailable && (
            <StyledButton onClick={() => setPage(page + 1)} className="ms-3">
              Next
            </StyledButton>
          )}
        </Col>
        <StyledDivider />
      </Row>
      {selectedCharacter && (
        <Offcanvas
          show={selectedCharacter}
          onHide={() => setSelectedCharacter()}
          placement="end"
          style={{background:'black', color:'white'}}
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
        </Offcanvas>
      )}
    </Container>
  );
};

export default CharactersPage;
