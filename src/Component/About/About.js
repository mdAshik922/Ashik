import React from 'react';
import Service from '../Service/Service';
import './About.css'

const About = () => {
    return (
        <div id="about" style={{marginTop: "5%", marginLeft: "3%"}}>
           <div>
           <h2 style={{color: "white", textAlign: "center",
            fontSize: "4rem", fontWeight: "bolder"}}> About</h2>
           </div>
           {/* display: "flex", flexDirection: "row" */}

           <div className="container mt-5">
           <div class="row">
         <div id="home-img" className="col-sm-5" >
                    <img id="ashik" style={{ marginTop: "-20%", marginRight:"2%"}} width={"100%"} src="https://i.ibb.co/cvctW3v/Layer-1.png" alt=""/>
               
                </div>
           <div className="about col-sm-7" style={{marginLeft:"4px", marginRight:"4px"}}><p style={{color: "white", textAlign: "center"}}><strong>I am a Web Developer mainly
                 focused on frontend.</strong></p><p style={{color: "white", textAlign: "center", marginTop: "-10px"}}><strong>
                 I'm a JavaScript Lover, quick learner, team player. I'm studying BGIFT in Computer Technology. I love creating projects and solving problems. 
I look forward to meeting new people and finding new opportunities to solve problems. Learning everyday, currently learning to master MERN stack <span style={{ color: "lightGreen"}}>&#127919;</span></strong></p>
</div>
</div>
         </div>

        <div style={{marginTop: "5%"}}>
            <h2 style={{color: "#29f1c3"}}>My skills :</h2>
            <h3 style={{color: "#fafad2"}} >I am good at :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">Javascript</button>
            <button type="button" className="btn btn-sm btn-success m-2">Es6</button>
            <button type="button" className="btn btn-sm btn-success m-2">React.js</button>
            <button type="button" className="btn btn-sm btn-success m-2">React Router</button>
            <button type="button" className="btn btn-sm btn-success m-2">html/css</button>
            <button type="button" className="btn btn-sm btn-success m-2">Bootstrap/React Bootstrap</button>
            <button type="button" className="btn btn-sm btn-success m-2">Tailwind css</button>
            <button type="button" className="btn btn-sm btn-success m-2">Material-UI</button>
            <button type="button" className="btn btn-sm btn-success m-2">Github</button>
            <button type="button" className="btn btn-sm btn-success m-2">Rest API</button>
           
            <h3 style={{color: "#fafad2"}} >Comfortable with :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">Node.js</button>
            <button type="button" className="btn btn-sm btn-success m-2">Express.js</button>
            <button type="button" className="btn btn-sm btn-success m-2">MongoDB</button>
            <button type="button" className="btn btn-sm btn-success m-2">Firebase</button> 
            <button type="button" className="btn btn-sm btn-success m-2">payment gateway</button>
            
           
            <h3 style={{color: "#fafad2"}} >Familiar with :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">Redux</button>
            <button type="button" className="btn btn-sm btn-success m-2">React Tailwind</button>
            <button type="button" className="btn btn-sm btn-success m-2">Next.js</button>
            <button type="button" className="btn btn-sm btn-success m-2">React Native</button> 
            <button type="button" className="btn btn-sm btn-success m-2">Typescript</button>
            <button type="button" className="btn btn-sm btn-success m-2">Google Map</button>
           
            <h3 style={{color: "#fafad2"}} >Tools :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">VS Code</button>
            <button type="button" className="btn btn-sm btn-success m-2">Chrome Dev Tools</button>
            <button type="button" className="btn btn-sm btn-success m-2">Git</button>
            <button type="button" className="btn btn-sm btn-success m-2">Figma</button>
            <button type="button" className="btn btn-sm btn-success m-2">Adobe Illustrator</button>
           
            <h3 style={{color: "#fafad2"}} >Deploy :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">Heroku</button>
            <button type="button" className="btn btn-sm btn-success m-2">Netlify</button>
            <button type="button" className="btn btn-sm btn-success m-2">Firebase</button>
            <button type="button" className="btn btn-sm btn-success m-2">Github</button>

        </div>


<Service></Service>
        
        </div>
    );
};

export default About;