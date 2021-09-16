import React, { useEffect, useState } from "react";
import {
  Alert,
  Button, Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { Colors } from "../../config/constants/colors";
import useDebounce from "../../config/utils/UseDebounce";
import { getCharactersAction } from "../../redux/actions/characters.action";
import CharacterCard from "./components/CharacterCard";
import CharacterDetailCanvas from "./components/CharacterDetailCanvas";

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
  const loading = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);
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
                  {loading?<Spinner animation="grow"/>:<Search />}
                </SearchContainer>
              </FloatingLabel>
            </Col>
          </Row>
        </Col>
        <StyledDivider />
      </Row>
        {error && <Alert className="text-center" variant="danger">{error}</Alert>}
      <Row className="justify-content-center">
        {characters?.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            setSelectedCharacter={setSelectedCharacter}
          />
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
        <CharacterDetailCanvas
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
        />
      )}
    </Container>
  );
};

export default CharactersPage;
