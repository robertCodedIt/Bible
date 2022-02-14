import {
  Container,
  Navbar,
  Col,
  Row,
  Nav,
  // NavDropdown,
  FormControl,
  Form,
  // Button,
} from "react-bootstrap";
// import SearchModal from "../components/SearchModal";
import { useState } from "react";

import Books from '../components/Books'
export default function BibleHeader(props) {

  const [search, setSearch] = useState("");
  return (
    <>
      {/* <SearchModal /> */}
      <Container>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Your Verse</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Bible</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {

                    setSearch(e.target.value);


                  }}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <div>
        <Container>
          <Row lg>
            <Col>

            </Col>
            <Col>
              <div style={{ backgroundColor: 'blue', marginTop: '2rem' }}>
                <Books />
              </div>
            </Col>
            {/* filter through searches */}
            <Col style={{
              marginTop: "2rem",
              backgroundColor: '#D3D3D3',
            }}>{search}</Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

