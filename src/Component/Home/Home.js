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
        <div id="">
            <div  className="home" style={{}}>
                <div style={{ color: "white",  marginTop: "15%"}}>
                    <h4 style={{textAlign: "center",  color: "rgb(18 214 221)",  fontSize: "5rem"}}>
                        Hi There, I'm &#9995;</h4>
                  

 <h1 style={{fontSize: "2rem", fontWeight: "bolder"}}>
 <Bounce right cascade>    Md.Mahmudul Hassan Ashik </Bounce>
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