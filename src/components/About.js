import React, { useState } from 'react'


const About = () => {

    const [ showAbout, setShowAbout ] = useState(false)

    return (
        <div className='about__footer' style={{height: '5vh', lineHeight:'2rem', marginTop: '80px'}}>
            <span style={{cursor: "pointer"}} onClick={e => setShowAbout(!showAbout)}>About</span>
            { !showAbout || <p className='about__footer__text'>
                octocatsfriendfinder is a Github profile finder. 
            </p> }
        </div>
    )
}

export default About
