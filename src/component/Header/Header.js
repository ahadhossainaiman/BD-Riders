import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  return (
    <div className="header">
      <Navbar variant="light" bg="light">
        <Navbar.Brand href="/home"><b>BD Riders</b></Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/login">Destination</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Link to="/login">{
        loggedInUser.isSignedIn === true ||  loggedInUser.success ===true? <h6 style={{color:'red',padding:'10px',border:'1px solid black'}}>{loggedInUser.name || loggedInUser.displayName}</h6>:<Button variant="outline-primary" className="ml-1">Login</Button>
        }</Link>
        </Nav> 
      </Navbar>
    </div>
  );
};

export default Header;
