import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-dom';
function NavigationBar() {
return (
<Navbar bg="dark" expand="lg" variant="dark">
<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="footer">footer</Nav.Link>
<Nav.Link href="/">home</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;