import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const AddEducation = () => {
    const [formdata, setFormData] = useState({
        school: '',
        session: '',
        course: '',
        description: ''
    })


    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
        console.log(formdata)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/addeducation', formdata)
            console.log(response);
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <div>
                <Navbar className="bg-body-tertiary p-3 md:shadow">
                    <Container fluid>
                        <Navbar.Brand className='font-bold text-2xl'>Add Education</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='my-4'>
                <Container fluid>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>School/University</Form.Label>
                            <Form.Control type="text" placeholder="School/university"
                                name='school' value={formdata.school} onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Session</Form.Label>
                            <Form.Control type="text" placeholder="Session"
                                name='session' value={formdata.session} onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Course</Form.Label>
                            <Form.Control type="text" placeholder="Course"
                                name='course' value={formdata.course} onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label className='text-xl font-bold'>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                name='description' value={formdata.description} onChange={handleChange}
                            />
                        </Form.Group>
                        <Button className='text-white bg-blue-400 font-bold' onClick={handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default AddEducation