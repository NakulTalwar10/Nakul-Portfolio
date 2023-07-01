import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

const Hireme = () => {
    return (
        <div className='bg-black'>
        <Container fluid className='d-flex align-items-center justify-content-center vh-10 py-5'>
          <div className='text-center'>
            <h1 className='text-white font-bold text-2xl py-4'>I Am Available for Freelance</h1>
            <Link to="Contact" spy={true} smooth={true} offset={50} duration={100}>
            <Button className='text-white bg-red font-bold text-xl'>Hire Me</Button>
            </Link>
          </div>
        </Container>
      </div>
    )
}

export default Hireme