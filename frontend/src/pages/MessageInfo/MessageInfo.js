import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const MessageInfo = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary p-3 md:shadow">
                <Container fluid>
                    <Navbar.Brand className='font-bold text-2xl'>Add Projects</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MessageInfo