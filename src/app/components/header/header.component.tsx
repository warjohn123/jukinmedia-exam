import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import styles from "./header.module.scss";

export function HeaderComponent() {
    return (
        <div>
            <Navbar expand="lg" fixed="top" className={styles.Navbar}>
                <Navbar.Brand href="/" style={{ color: 'white' }}>
                    Logo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className={styles.NavLink}>Categories</Nav.Link>
                        <Nav.Link className={styles.NavLink}>Collections</Nav.Link>
                        <Nav.Link className={styles.NavLink}>FAQ</Nav.Link>
                        <Nav.Link className={styles.NavLink}>Pricing</Nav.Link>
                        <Nav.Link className={styles.NavLink}>The Wire</Nav.Link>
                        <Nav.Link className={styles.NavLink}>Contact Us</Nav.Link>
                        <Button variant="outline-light" style={{ marginRight: 7 }}>SIGN IN</Button>
                        <Button variant="danger" style={{ marginLeft: 7 }}>SIGN UP</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}