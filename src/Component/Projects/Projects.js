import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id="projects" style={{marginLeft: "15%", marginTop: "10%"}}>
 <h2 style={{color: "white", marginLeft: "20%", marginBottom: "4%",
  fontSize: "4rem", fontWeight: "bolder"}}
 >Here Are Some of </h2>

 <h2 style={{color: "white", marginTop: "-7vh", marginBottom: "4%", marginLeft: "20%",  fontSize: "4rem",
  fontWeight: "bolder"}}
 >My Projects</h2>

<div style={{display: "flex", flexDirection: "row"}} >

<div>
            <img width="55%" src="https://i.ibb.co/Zg8Qrrf/luxury-4.png" alt="luxury-room"/>
            <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group"><Link to="https://book-haven-client.web.app/"
             target="_bank" className="btn btn-sm btn-success">Live Site</Link>
             <Link to="https://github.com/mdAshik922/luxury_room_client_site" target="_blank" 
            className="btn btn-sm btn-success">GitHub-Client</Link>
             <Link to="https://github.com/mdAshik922/luxury_server_site" target="_blank" 
            className="btn btn-sm btn-success">GitHub-Server</Link>
            </div></div>  </div>
          
           <div>
           <img width="55%" src="https://i.ibb.co/V9gMbdH/Screenshot-4.png" alt="summer-camp"/>
            <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to="https://unruffled-stonebraker-10075c.netlify.app"
             target="_bank" className="btn btn-sm btn-success">Live Site</Link>
             <Link to="https://github.com/mdAshik922/summer_camp" target="_blank" 
            className="btn btn-sm btn-success">GitHub-Client</Link>
            <Link to="https://github.com/mdAshik922/summer_camp_server" target="_blank" 
            className="btn btn-sm btn-success">GitHub-Server</Link></div></div>
           </div>
        </div>

        <div style={{display: "flex", flexDirection: "row", marginTop: "2%"}}>
            
           <div>
           <img width="55%" src="https://i.ibb.co/Bq5HfFm/Screenshot-5.png" alt="mac-book-pro"/>
            <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to="https://mac-book-pro-0e5fd4.netlify.app"
             target="_bank" className="btn btn-sm btn-success">Live Site</Link>
             <Link to="https://github.com/mdAshik922/iMac" target="_blank" 
            className="btn btn-sm btn-success">GitHub</Link>
            </div></div></div>
           

           <div style={{marginTop: "2%"}}>
           <img width="55%" src="https://i.ibb.co/Yf2NtW2/Screenshot-10.png" alt="study"/>
            <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to="https://gracious-austin-dbf746.netlify.app"
             target="_bank" className="btn btn-sm btn-success">Live Site</Link>
             <Link to="https://github.com/mrakib007/book-haven-client" target="_blank" 
            className="btn btn-sm btn-success">GitHub</Link>
           </div></div> </div>
           </div>

           <div style={{display: "flex", flexDirection: "row"}} >

           <div style={{}}>
           <img width="55%" src="https://i.ibb.co/3hNLqzj/health-11.png" alt="health"/>
            <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to="https://quizzical-swartz-c4206c.netlify.app"
             target="_bank" className="btn btn-sm btn-success">Live Site</Link>
             <Link to="https://github.com/mdAshik922/Hospital" target="_blank" 
            className="btn btn-sm btn-success">GitHub</Link>
           </div></div></div>

           <div style={{marginTop: "2%"}}>
           <img width="55%" src="https://i.ibb.co/zN9jjNx/Screenshot-6.png" alt="Brand-store"/>
            <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to="https://compassionate-rosalind-a8fe71.netlify.app"
             target="_bank" className="btn btn-sm btn-success">Live Site</Link>
             <Link to="https://github.com/mdAshik922/Brand-Shope" target="_blank" 
            className="btn btn-sm btn-success">GitHub</Link>
            </div></div> </div>
            </div>

        </div>
    );
};

export default Projects;