import React from 'react';
import { Fade } from 'react-reveal';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

import SocialLink from './SocialLink';

const Home = () => {

    return (
        <div id="home" style={{backgroundColor: "black"}}>
            <div style={{display: "flex", flexDirection: "row", border: "1px solid", borderBottomColor: "red"}}>
                <div style={{marginLeft: "3%", color: "white",  marginTop: "5%"}}>
                    <h3>Hello,I'm</h3>
                  
<h2 >  <Fade left cascade> Md.Mahmudul Hassan Ashik</Fade></h2>
      
                    <p><strong>
                    I am a Web Developer and mainly focused on frontend.
                     I am a JavaScript Lover,</strong></p>  <p style={{marginTop: "-2%"}}><strong>
                     quick learner, team player. Currently focused on expanding my knowledge about
                     developing high performing websites and get hired.</strong></p>
                     <button style={{backgroundColor: "greenyellow", fontSize: "2rem", fontWeight: "bold", borderRadius: '10px'}} type=''>
                         <i className="far fa-file"></i> Resume</button>
                </div>
                <div>
                    <img width={"65%"} src="https://i.ibb.co/cvctW3v/Layer-1.png" alt=""/>
               
                </div>
                <SocialLink></SocialLink>
            </div>
         
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;