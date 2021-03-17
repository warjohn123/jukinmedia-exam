import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import styles from "./header.module.scss";

export function HeaderComponent() {
    return (
        <div>
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    Logo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>Categories</Nav.Link>
                        <Nav.Link>Collections</Nav.Link>
                        <Nav.Link>FAQ</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                        <Nav.Link>The Wire</Nav.Link>
                        <Nav.Link>Contact Us</Nav.Link>
                        <Button variant="outline-primary" style={{ marginRight: 7 }}>SIGN IN</Button>
                        <Button variant="secondary" style={{ marginLeft: 7 }}>SIGN UP</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}