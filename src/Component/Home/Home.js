import React from 'react';
import Bounce from 'react-reveal/Bounce';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import './Home.css';
import SocialLink from './SocialLink';
import Typewriter from "typewriter-effect";

const Home = () => {
    const driveProps = {
        href:"https://drive.google.com/file/d/1RotqzlKuHfN9mw_Nla2ZD3JEiPU2Pkmg/view?usp=sharing",
         target:"_blank"
      };
    return (
        <div id="home" style={{backgroundColor: "black"}}>
            <div className="home" style={{display: "flex", flexDirection: "row"}}>
                <div style={{marginLeft: "3%", color: "white",  marginTop: "20%"}}>
                    <h3 style={{textAlign: "center", fontWeight: "bold",  color: "rgb(18 214 221)"}}>Hi There, I'm &#9995;</h3>
                  
<h2 styles={{fontWeight: "bolder"}} >  <Bounce right cascade> Md.Mahmudul Hassan Ashik</Bounce></h2>
      
<Typewriter
      options={{
        strings: [
          "WEB DEVELOPER",
          "MERN Stack Developer",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
                    <p><strong>
                    I'm a Junior Web Developer and mainly focused on frontend.
                     I am a JavaScript Lover,</strong></p>  <p style={{marginTop: "-2%"}}><strong>
                     quick learner, team player. Currently focused on expanding my knowledge about
                     developing high performing websites and get hired.</strong></p>
                    <a  {...driveProps} rel="noreferrer"> <button style={{backgroundColor: "greenyellow", fontSize: "2rem", fontWeight: "bold", borderRadius: '10px', marginLeft: "35%"}} type=''>
                    <i className="fas fa-file-download"></i>Resume</button></a>
               
                    <Bounce bottom> <SocialLink></SocialLink></Bounce>
                </div>
            
          
            </div>
         
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
       
        </div>
    );
};

export default Home;