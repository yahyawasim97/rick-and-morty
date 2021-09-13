import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { Colors } from "../../config.js/constants/colors";

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
                <Form.Select>
                  <option value="1">Any</option>
                  <option value="2">Male</option>
                  <option value="3">Female</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md="7" className="py-2">
              <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control type="text" placeholder="Rick..." />
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
        <Col md="4" xs="10" className="px-4 pb-5">
          <StyledCard>
            <StyledCardImage variant="bottom" src={Logo} />
            <Card.Body>
              <Card.Title>Rick and Morty</Card.Title>
              <Card.Text className="mb-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <StyledButton variant="primary" className="w-100">
                Go somewhere
              </StyledButton>
            </Card.Body>
          </StyledCard>
        </Col>
        <Col md="4" xs="10" className="px-4 pb-5">
          <StyledCard>
            <StyledCardImage variant="bottom" src={Logo} />
            <Card.Body>
              <Card.Title>Rick and Morty</Card.Title>
              <Card.Text className="mb-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <StyledButton variant="primary" className="w-100">
                Go somewhere
              </StyledButton>
            </Card.Body>
          </StyledCard>
        </Col>{" "}
        <Col md="4" xs="10" className="px-4 pb-5">
          <StyledCard>
            <StyledCardImage variant="bottom" src={Logo} />
            <Card.Body>
              <Card.Title>Rick and Morty</Card.Title>
              <Card.Text className="mb-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <StyledButton variant="primary" className="w-100">
                Go somewhere
              </StyledButton>
            </Card.Body>
          </StyledCard>
        </Col>{" "}
        <Col md="4" xs="10" className="px-4 pb-5">
          <StyledCard>
            <StyledCardImage variant="bottom" src={Logo} />
            <Card.Body>
              <Card.Title>Rick and Morty</Card.Title>
              <Card.Text className="mb-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <StyledButton variant="primary" className="w-100">
                Go somewhere
              </StyledButton>
            </Card.Body>
          </StyledCard>
        </Col>{" "}
        <Col md="4" xs="10" className="px-4 pb-5">
          <StyledCard>
            <StyledCardImage variant="bottom" src={Logo} />
            <Card.Body>
              <Card.Title>Rick and Morty</Card.Title>
              <Card.Text className="mb-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <StyledButton variant="primary" className="w-100">
                Go somewhere
              </StyledButton>
            </Card.Body>
          </StyledCard>
        </Col>{" "}
        <Col md="4" xs="10" className="px-4 pb-5">
          <StyledCard>
            <StyledCardImage variant="bottom" src={Logo} />
            <Card.Body>
              <Card.Title>Rick and Morty</Card.Title>
              <Card.Text className="mb-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <StyledButton variant="primary" className="w-100">
                Go somewhere
              </StyledButton>
            </Card.Body>
          </StyledCard>
        </Col>
      </Row>
      <Row className="mb-5">
        <StyledDivider />
        <Col md="12" className="d-flex justify-content-center">
            <StyledButton className="me-3">Previous</StyledButton>
            <StyledButton className="ms-3">Next</StyledButton>
        </Col>
        <StyledDivider />
      </Row>
    </Container>
  );
};

export default CharactersPage;
