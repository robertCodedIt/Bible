// import React,{useState} from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import Search from './Search'
// import { LinkContainer } from 'react-router-dom';
function NavigationBar(props) {
// const [search,setSearch] = useState('');

return (
<Navbar bg="dark" expand="lg" variant="dark">
<Navbar.Brand href="/">Your Verse</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="/forum">Forum</Nav.Link>
<Nav.Link href="/">Home</Nav.Link>
</Nav>
<Search/>
</Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;