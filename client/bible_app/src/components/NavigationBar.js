// import React,{useState} from 'react';
import { Navbar, Nav,Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-dom';
function NavigationBar(props) {
// const [search,setSearch] = useState('');

return (
<Navbar bg="dark" expand="lg" variant="dark">
<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="#">Profile</Nav.Link>
<Nav.Link href="/">home</Nav.Link>
<input style = {{color:"purple",display:'flex'}} placeholder = 'Search The Bible'/>
</Nav>
<Button> Search</Button>
</Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;