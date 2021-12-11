import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Fade from 'react-reveal/Fade';

const Home = () => {
    


    return (
        <div id="home" style={{backgroundColor: "black"}}>
            <div style={{display: "flex", flexDirection: "row", marginTop: "5%"}}>
                <div style={{marginLeft: "3%", color: "white"}}>
                    <h3>Hello,I'm</h3>
                  
<h2 >  <Fade left cascade> Md.Mahmudul Hassan Ashik</Fade></h2>
      
 
        
                    <p><strong>
                    I am a Web Developer and mainly focused on frontend.
                     I am a JavaScript Lover, quick learner, team player.
                      Currently focused on expanding my knowledge about
                     developing high performing websites and get hired.</strong></p>
                     <button style={{backgroundColor: "greenyellow"}} type=''>Download Resume</button>
                </div>
                <div>
                    <img width={"65%"} src="https://i.ibb.co/cvctW3v/Layer-1.png" alt=""/>
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