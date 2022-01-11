import React from 'react';
import Service from '../Service/Service';
import './About.css';


const About = () => {
    
    return (
        <div id="about" style={{marginTop: "5%"}}>
           <div>
           
           <h2 style={{color: "white", textAlign: "center",
            fontSize: "4rem", fontWeight: "bolder"}}> About</h2>
           </div>
           
           <div className="container mt-5">
           <div className="row">
         <div className="col-sm-3"  >
                <img  width="80%" style={{border: "10px solid #c4c98b", borderRadius: "10%"}} src="https://i.ibb.co/cvctW3v/Layer-1.png" alt=""/>
                            
                   </div>

              <article className="about col-sm-9">
              <p style={{color: "white", textAlign: "center"}}>
                   <strong>I'm a Junior Web Developer mainly
                 focused on Front-end Web Development.</strong></p>
                
                 <p style={{color: "white", textAlign: "center", marginTop: "-2%"}}><strong>
                 I'm a JavaScript Lover, quick learner, team player. I'm studying BGIFT in Computer Technology. I love creating projects and solving problems. 
I look forward to meeting new people and finding new opportunities to solve problems. Learning everyday, currently learning to master MERN stack <span style={{ color: "lightGreen"}}>&#127919;</span></strong></p>
              </article>
              
        </div>
    </div>
    
        <article style={{ display: "grid", gridTemplateColumns: "auto auto", marginTop: "5%", marginLeft: "10%"}}>

        <div>
          <p className='skill-bar-text'>html5, css3, bootstrap5, tailwind css</p>
        <div className="progress" style={{width: "65%"}}>
           <div className="progress-bar progress-bar-striped progress-bar-animated" 
           role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100"
            style={{width: "93%", backgroundColor: "green"}}></div>
         </div>
        </div>
<br/>
       <div>
       <p className='skill-bar-text'>Javascript, Es6, React bootstrap, React tailwind, Material-UI</p>
       <div className="progress" style={{width: "65%"}}>
  <div className="progress-bar progress-bar-striped progress-bar-animated"
   role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100"
    style={{width: "75%", backgroundColor: "#7ed6df"}}></div>
</div>
       </div>
<br/>
        <div>
          <p className='skill-bar-text'>Redux, Typescript, Next.js, React Native, Google Map</p>
        <div className="progress" style={{width: "65%"}}>
  <div className="progress-bar progress-bar-striped progress-bar-animated"
   role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100"
    style={{width: "35%", backgroundColor: "rgb(205 86 113)"}}></div>
</div>
        </div>
<br/>
        <div>
          <p className='skill-bar-text'>Node.js, Express.js, MongoDB, Firebase, JWT Token, payment gateway</p>
        <div className="progress" style={{width: "65%"}}>
  <div className="progress-bar progress-bar-striped progress-bar-animated"
   role="progressbar" aria-valuenow="75" aria-valuemin="10" aria-valuemax="100"
    style={{width: "45%", backgroundColor: "#e056fd"}}></div>
</div>
        </div>
        <aside>
        <img width="45%" style={{marginTop: "-45%", marginLeft: "10%", backgroundColor: "aquamarine", borderRadius: "16%", transform: "rotate(20deg)"}} src="https://i.ibb.co/6P322QP/illustrator-1.png" alt=""/>
        </aside>
        </article>

<Service></Service>
        
        </div>
    );
};

export default About;