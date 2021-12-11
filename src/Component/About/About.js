import React from 'react';

const About = () => {
    return (
        <div id="about" style={{marginTop: "30%", marginLeft: "15%"}}>
           <div>
           <h2 style={{color: "white", marginLeft: "30%", marginBottom: "4%", fontSize: "4rem", fontWeight: "bolder"}}>About</h2>
            <p style={{color: "white"}}><strong>I am a Web Developer mainly
                 focused on frontend.</strong></p><p style={{color: "white", marginTop: "-10px"}}><strong>
                 I am a JavaScript Lover, quick learner, team player.</strong></p>
           </div>
        
        <div>
            <h2 style={{color: "#29f1c3"}}>My skills :</h2>
            <h3 style={{color: "blue"}} >I am good at :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">Javascript</button>
            <button type="button" className="btn btn-sm btn-success m-2">Es6</button>
            <button type="button" className="btn btn-sm btn-success m-2">React.js</button>
            <button type="button" className="btn btn-sm btn-success m-2">React Router</button>
            <button type="button" className="btn btn-sm btn-success m-2">html/css</button>
            <button type="button" className="btn btn-sm btn-success m-2">Bootstrap</button>
            <button type="button" className="btn btn-sm btn-success m-2">Tailwind css</button>
            <button type="button" className="btn btn-sm btn-success m-2">Material-UI</button>
            <button type="button" className="btn btn-sm btn-success m-2">Github</button>
            <button type="button" className="btn btn-sm btn-success m-2">Rest API</button>
           
            <h3 style={{color: "blue"}} >Familiar with :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">Node.js</button>
            <button type="button" className="btn btn-sm btn-success m-2">Express.js</button>
            <button type="button" className="btn btn-sm btn-success m-2">MongoDB</button>
            <button type="button" className="btn btn-sm btn-success m-2">Firebase</button> 
            <button type="button" className="btn btn-sm btn-success m-2">Typescript</button>
           
            <h3 style={{color: "blue"}} >Tools :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">VS Code</button>
            <button type="button" className="btn btn-sm btn-success m-2">Chrome Dev Tools</button>
            <button type="button" className="btn btn-sm btn-success m-2">Git</button>
            <button type="button" className="btn btn-sm btn-success m-2">Figma</button>
            <button type="button" className="btn btn-sm btn-success m-2">Adobe Illustrator</button>
           
            <h3 style={{color: "blue"}} >Deploy :</h3>
            <button type="button" className="btn btn-sm btn-success m-2">Heroku</button>
            <button type="button" className="btn btn-sm btn-success m-2">Netlify</button>

        </div>
        </div>
    );
};

export default About;