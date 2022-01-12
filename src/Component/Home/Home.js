import React from 'react';
import Bounce from 'react-reveal/Bounce';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import SocialLink from './SocialLink';
import Typewriter from "typewriter-effect";
import './Home.css';

const Home = () => {

    const driveProps = {
        href:"https://drive.google.com/file/d/1qCCZY9hH6xrNrMW9QxDh2SjzLuGbgWMn/view?usp=sharing",
         target:"_blank"
      };
      
    return (
        <div id="home">
            <div  className="home" >
                <div style={{ color: "white",  marginTop: "15%"}}>
                    <article>
                    <h4 style={{textAlign: "center",  color: "rgb(18 214 221)",  fontSize: "5rem", fontFamily: "monospace"}}>
                        Hi There &#9995;, I'm </h4>

 <h1 style={{fontSize: "2rem", fontWeight: "bolder", fontFamily: "cursive"}}>
 <Bounce right cascade> Md.Mahmudul Hassan Ashik </Bounce>
 </h1>
                         <span 
                    style={{fontWeight: "bolder", fontSize: "2rem", textAlign: "center"}}>
                    <Typewriter
      options={{
        strings: [
          "Junior Web Developer",
          " JavaScript Lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />  
                    </span>
                     
                    <a  {...driveProps} rel="noreferrer">
                         <button style={{backgroundColor: "greenyellow", fontSize: "2rem", fontWeight: "bold", borderRadius: '10px', marginLeft: "35%"}} type=''>
                    <i className="fas fa-file-download"></i>Resume</button>
                    </a>
                    </article>
      
                      <img width="15%" style={{backgroundColor: "cadetblue", borderRadius: "0px 50px 2px 0px"}} src="https://i.ibb.co/phCtfp1/illustrator-2.png" alt="working"/>
          
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