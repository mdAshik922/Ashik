import React from 'react';
import Bounce from 'react-reveal/Bounce';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import SocialLink from './SocialLink';
import Typewriter from "typewriter-effect";
import Service from '../Service/Service';
import './Home.css';

const Home = () => {

    const driveProps = {
        href:"https://drive.google.com/file/d/1qCCZY9hH6xrNrMW9QxDh2SjzLuGbgWMn/view?usp=sharing",
         target:"_blank"
      };
      
    return (
        <div id="home">
            <div  className="home" >
              <div>
                    <h4> Hi There &#9995;, I'm </h4>
                    <h1 style={{fontSize: "2rem", fontWeight: "bolder", fontFamily: "cursive"}}>
                     <Bounce right cascade> Md.Mahmudul Hassan Ashik </Bounce> </h1>
                       
                         <span>
                    <Typewriter
            options = {{
               strings: [ "Junior Web Developer", " JavaScript Lover" ],
                     autoStart: true,
                       loop: true,
                     deleteSpeed: 50,
                      }} />  </span>
                    
                    <a  {...driveProps} rel="noreferrer">
                         <button style={{backgroundColor: "greenyellow", fontSize: "2rem", fontWeight: "bold", borderRadius: '10px', marginLeft: "35%"}} type=''>
                    <i className="fas fa-file-download"></i>Resume</button>
                    </a>
                    </div>
                      <img width="15%" style={{backgroundColor: "cadetblue", borderRadius: "0px 50px 2px 0px"}} src="https://i.ibb.co/phCtfp1/illustrator-2.png" alt="working"/>
                    <Bounce bottom> <SocialLink></SocialLink></Bounce>
            </div>
         
            <About></About>
            <img style={{marginTop:"4%"}} width="100%" src="https://i.ibb.co/jhRSHhj/Screenshot-5.png" alt="project"/>
            <Service></Service>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;