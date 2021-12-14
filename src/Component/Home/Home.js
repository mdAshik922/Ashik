import React from 'react';
import Bounce from 'react-reveal/Bounce';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import './Home.css';
import SocialLink from './SocialLink';

const Home = () => {
    const driveProps = {
        href:"https://drive.google.com/file/d/1RotqzlKuHfN9mw_Nla2ZD3JEiPU2Pkmg/view?usp=sharing",
         target:"_blank"
      };
    return (
        <div id="home" style={{backgroundColor: "black"}}>
            <div className="home" style={{display: "flex", flexDirection: "row"}}>
                <div style={{marginLeft: "3%", color: "white",  marginTop: "5%"}}>
                    <h3>Hello,I'm</h3>
                  
<h2 >  <Bounce right cascade> Md.Mahmudul Hassan Ashik</Bounce></h2>
      
                    <p><strong>
                    I am a Web Developer and mainly focused on frontend.
                     I am a JavaScript Lover,</strong></p>  <p style={{marginTop: "-2%"}}><strong>
                     quick learner, team player. Currently focused on expanding my knowledge about
                     developing high performing websites and get hired.</strong></p>
                    <a  {...driveProps} rel="noreferrer"> <button style={{backgroundColor: "greenyellow", fontSize: "2rem", fontWeight: "bold", borderRadius: '10px'}} type=''>
                         <i className="far fa-file"></i> Resume</button></a>
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