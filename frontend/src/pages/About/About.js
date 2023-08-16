import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa'
import { MdOutlineFormatColorFill } from "react-icons/md";
import './About.css'

const About = () => {
    return (
        <div id='About'>
            <Container fluid>
                <Row>
                    <Col md={4} className='border border-gray-300 py-5 px-3'>
                        <div className=''>
                            <h1 className='font-semibold text-2xl'>Who Am I?</h1>
                            <h1 className='mt-5 font-bold text-xl'>A Web Developer / MERN Stack Developer</h1>
                            <p className='font-semibold mt-3'>Expert in developing Responsive & Interactive websites |Expert in CSS3, HTML5, Bootstrap, and React
                                JS |Very good knowledge of JavaScript, and Node JS. Make Resonsive and attractive websites. Make work as my first priority.</p>
                            <button alt='Download cv' className='nakul_cv my-5'>
                                <a href="https://drive.google.com/file/d/1kQ-qM8CbBbLo6Pw0jjs_8BLYNP2HRfTV/view?usp=sharing" target='_blank' rel="noreferrer">
                                    <i>D</i>
                                    <i>o</i>
                                    <i>w</i>
                                    <i>n</i>
                                    <i>l</i>
                                    <i>o</i>
                                    <i>a</i>
                                    <i>d</i>
                                    <i>&nbsp;</i>
                                    <i>C</i>
                                    <i>V</i>
                                </a>
                            </button>
                        </div>
                    </Col>
                    <Col  md={4} className='border border-gray-300 py-5 px-3'>
                        <div className=''>
                            <h1 className='font-semibold text-2xl'>Personal Info</h1>
                            <ul className='my-12'>
                                <li><span className='font-bold mx-2'>Birth Date:</span>10/05/2001</li>
                                <li><span className='font-bold mx-2'>Email:</span>tnakult@gmail.com</li>
                                <li><span className='font-bold mx-2'>Contact:</span>9213992300</li>
                                <li><span className='font-bold mx-2'>Address:</span>Mayur Vihar Phase-1 , Delhi-110091</li>
                            </ul>
                            <ul className='flex text-black container'>
                                <li className='mx-4 font-bold text-2xl'>
                                    <a href="https://www.linkedin.com/in/nakul-talwar-6b2566211/" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
                                        <FaLinkedin />
                                    </a>
                                </li>
                                <li className='mx-4 font-bold text-2xl'>
                                    <a href="https://github.com/NakulTalwar10" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
                                        <FaGithubSquare />
                                    </a>
                                </li>
                                <li className='mx-4 font-bold text-2xl'>
                                    <a href="https://www.instagram.com/nakulll.10/" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li className='mx-4 font-bold text-2xl'>
                                    <a href="https://twitter.com/TalwarNakul" target='_blank' rel="noreferrer" className='hover:text-[grey]'>
                                        <FaTwitter />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} className='border border-gray-300 py-5 px-3'>
                        <div className=''>
                            <h1 className='font-semibold text-2xl'>My Expertise</h1>
                            <div className='my-8 mx-5'>
                                <Row>
                                    <Col md={3}>
                                    <div className='text-6xl text-[#4e71da]'>
                                        <FaReact />
                                        </div>
                                    </Col>
                                    <Col>
                                        <h1 className='font-bold my-2'> Web Development</h1>
                                        <h1>Web Full Stack Developer</h1>
                                    </Col>
                                </Row>
                                <hr className='border-2 border-zinc-600 my-3'/>
                            </div>
                            <div className='my-8 mx-5'>
                                <Row>
                                    <Col md={3}>
                                    <div className='text-6xl text-[#e2756b]'>
                                        <MdOutlineFormatColorFill />
                                        </div>
                                    </Col>
                                    <Col>
                                        <h1 className='font-bold my-2'>UX Design </h1>
                                        <h1>Design Responsive Websites</h1>
                                    </Col>
                                </Row>
                                <hr className='border-2 border-zinc-600 my-3'/>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
