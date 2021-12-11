import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Home = () => {
    


    return (
        <div id="home" style={{backgroundColor: "black"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{marginLeft: "3%", color: "white",  marginTop: "5%"}}>
                    <h3>Hello,I'm</h3>
                  
<h2 >  <Fade left cascade> Md.Mahmudul Hassan Ashik</Fade></h2>
      
 
        
                    <p><strong>
                    I am a Web Developer and mainly focused on frontend.
                     I am a JavaScript Lover,</strong></p>  <p style={{marginTop: "-2%"}}><strong>
                     quick learner, team player. Currently focused on expanding my knowledge about
                     developing high performing websites and get hired.</strong></p>
                     <button style={{backgroundColor: "greenyellow"}} type=''>Download Resume</button>
                </div>
                <div>
                    <img width={"65%"} src="https://i.ibb.co/cvctW3v/Layer-1.png" alt=""/>
               
                </div>
         
            </div>
            <div style={{textAlign: "end", marginRight: "5%"}}>
      <Link to="https://github.com/mdAshik922">
          <i  style={{ color: "white",}} className="fab fa-github"></i></Link>
       <Link to="https://www.linkedin.com/in/md-mahmudul-hassan-ashik/">
           <i style={{ color: "white",  margin: "15px"}} className="fab fa-linkedin"></i></Link>
       <Link to="https://www.facebook.com/profile.php?id=100042195889411">
           <i style={{ color: "white"}} className="fab fa-facebook"></i></Link>
           </div>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;