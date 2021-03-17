import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import styles from "./header.module.scss";

export function HeaderComponent() {

    const [isTop, setIsTop] = useState(true);

    function handleScroll() {
        if (window.pageYOffset === 0) {
            setIsTop(true);
            return;
        }

        setIsTop(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar expand="lg" fixed="top" className={isTop ? styles.Navbar : styles.NavbarScrolled}>
                <Navbar.Brand href="/" style={{ color: 'white' }}>
                    <img style={{ width: 50, height: 47 }} src="https://miro.medium.com/max/778/1*5Y_IHFrNWreVa2r7jdQYGg.png"></img>
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
                        <Button className={styles.SignIn} variant={isTop ? 'outline-dark' : 'outline-light'}>SIGN IN</Button>
                        <Button className={styles.SignUp} variant="danger">SIGN UP</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}