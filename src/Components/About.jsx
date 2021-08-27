import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequuntur ducimus ea, deserunt rerum harum, 
                     eius obcaecati a voluptatibus voluptatum vel animi vero in?
                     Esse ab sapiente dignissimos quis optio quibusdam distinctio 
                     eaque ullam pariatur commodi.</p>

                     <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About
