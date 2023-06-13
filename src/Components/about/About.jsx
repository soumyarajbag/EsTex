import React from 'react'
import './about.css'
import Back from '../common/Back'
import Heading from '../common/Heading'
import img from "../images/about.jpg"
import img2 from './immio.jpg'
import './immio.jpg'
const About = () => {
  return (
    <>
    <section className="about">
        <Back name = "About Us" title="About Us - Who We Are ? " cover={img} />
        <div className="container flex mtop">
            <div className="left row">
                <Heading title = 'Our Agency Story' subtitle='Check out Our Company story and work process ! ' />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro enim provident iure cum velit quod, ducimus maxime dolore, veritatis nihil quidem iusto autem necessitatibus. Tempore doloribus quo sapiente non, et porro, dolore temporibus dolorum molestiae iure aspernatur labore sunt ut.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem maxime incidunt non explicabo id. Cum?</p>
                <button className="btn2">More About Us</button>
            </div>
            <div className="right row">
                <img src={img2} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default About