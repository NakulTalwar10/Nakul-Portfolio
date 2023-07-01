import React, { useState } from 'react'
import { Slider } from '@mui/material'
import Box from '@mui/material/Box';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const AddSkills = () => {
    const [skills, setSkills] = useState('')
    const [rating, setRating] = useState(30)

    const handleSkillChange = (e) => {
        setSkills(e.target.value);
        console.log(skills);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value)
        console.log(rating);
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            const response = axios.post('http://localhost:8000/addskills', {
                skills,
                rating
            })
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <div>
                <Navbar className="bg-body-tertiary p-3 md:shadow">
                    <Container fluid>
                        <Navbar.Brand className='font-bold text-2xl'>Add Skills</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='my-5'>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Skill</Form.Label>
                            <Form.Control type="text" placeholder="Skills Name"
                                value={skills}
                                onChange={handleSkillChange}
                            />
                        </Form.Group>
                    </Form>
                </Container>
            </div>

            <div className=''>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-xl font-bold'>Rate in %</Form.Label>
                            <Box sx={{ width: 300, }}>
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={10}
                                    max={100}
                                    value={rating}
                                    onChange={handleRatingChange}
                                />
                            </Box>
                        </Form.Group>
                        <Button className='text-white bg-blue-400 font-bold' onClick={handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div>


        </div>
    )
}

export default AddSkills