import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const AddProjects = () => {

    const [formdata, setFormData] = useState({
        title: '',
        link: '',
        image: '',
        description: '',
        category:''
    })

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
        console.log(formdata)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/addprojects', formdata)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
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
            <div className='my-4'>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title"
                                name='title'
                                value={formdata.title}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Category</Form.Label>
                            <Form.Control type="text" placeholder="Category"
                                name='category'
                                value={formdata.category}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Link</Form.Label>
                            <Form.Control type="text" placeholder="Website Link"
                                name='link' value={formdata.link} onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Image</Form.Label>
                            <Form.Control type="text" placeholder="Images URL"
                                name='image' value={formdata.image} onChange={handleChange}
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

export default AddProjects