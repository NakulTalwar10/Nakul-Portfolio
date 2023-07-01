import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <div className='my-40 container'>
            <div className=''>
                <h1 className='head-1 font-bold text-white my-43font text-3xl'>Hello, I Am</h1>
                <h1 className='head-2 font-extrabold text-white my-3 text-5xl'>Nakul Talwar</h1>
                <h1 className='head-3 font-bold text-white my-3 text-3xl'>Full Stack Developer | MERN Stack</h1>
            </div>
            <button className='btn-1'>
                <a href="https://drive.google.com/file/d/11gvJJrIKuk95DdTJo_tUH6zltvA32ckV/view?usp=sharing" target='_blank' rel="noreferrer">
                    <h1 className='hover:text-white'> Resume</h1>
                </a>
            </button>
        </div>
    )
}

export default Main