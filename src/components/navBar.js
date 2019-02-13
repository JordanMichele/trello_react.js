import React from 'react';
import { Navbar } from 'react-bootstrap';
export default function navigation() {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>

        </div>  
    );
}