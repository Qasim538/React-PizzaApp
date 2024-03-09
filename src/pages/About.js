import React from 'react'
import '../styles/About.css'
import MultiplePizzas from '../images/multiplePizzas.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eius ex, iste blanditiis voluptatibus libero autem consequuntur, omnis optio repudiandae dignissimos, aliquam magni vitae dicta aspernatur voluptates vel quae a.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur recusandae reiciendis, a vero est facilis velit consectetur iure impedit.</p>
        </div>
      
    </div>
  )
}

export default About
