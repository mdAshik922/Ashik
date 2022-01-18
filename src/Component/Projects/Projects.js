import React from 'react';
import './Projects.css';

const Projects = () => {

    const luxuryProps = {
        href:"https://book-haven-client.web.app/",
         target:"_blank"
      };

      const luxuryGithubClient = {
        href:"https://github.com/mdAshik922/luxury_room_client_site",
         target:"_blank"
      };

      const luxuryGithubServerSide = {
        href:"https://github.com/mdAshik922/luxury_server_site",
         target:"_blank"
      };
    const bicycleProps = {
        href:"https://admiring-goldwasser-abd61f.netlify.app",
         target:"_blank"
      };

      const bicycleGithubClient = {
        href:"https://github.com/mdAshik922/niche-bicycle-client-side",
         target:"_blank"
      };

      const bicycleGithubServerSide = {
        href:"https://github.com/mdAshik922/bicycle-server",
         target:"_blank"
      };

      const summerCampLiveSite = {
        href:"https://unruffled-stonebraker-10075c.netlify.app/",
         target:"_blank"
      };

      const summerCampGithubClientSite = {
        href:"https://github.com/mdAshik922/summer_camp",
         target:"_blank"
      };

      const summerCampGithubServerSite = {
        href:"https://github.com/mdAshik922/summer_camp_server",
         target:"_blank"
      };
      const macBookProLiveSite = {
        href:"https://mac-book-pro-0e5fd4.netlify.app",
         target:"_blank"
      };
      const macBookProGithub = {
        href:"https://github.com/mdAshik922/iMac",
         target:"_blank"
      };
      const studyLiveSite = {
        href:"https://gracious-austin-dbf746.netlify.app",
         target:"_blank"
      };
      const studyGithub = {
        href:"https://github.com/mrakib007/book-haven-client",
         target:"_blank"
      };
      const healthLiveSite = {
        href:"https://quizzical-swartz-c4206c.netlify.app",
         target:"_blank"
      };
      const healthGithub = {
        href:"https://github.com/mdAshik922/Hospital",
         target:"_blank"
      };
      const brandShopLiveLink = {
        href:"https://compassionate-rosalind-a8fe71.netlify.app",
         target:"_blank"
      };
      const brandShopGithub = {
        href:"https://github.com/mdAshik922/Brand-Shope",
         target:"_blank"
      };


    return (
        <div id="projects" style={{ marginTop: "10%"}}>
 
 <h2 style={{color: "white", marginTop: "1%", marginBottom: "2%",
  textAlign: "center",  fontSize: "4rem", fontWeight: "bolder"}}
 >My Projects</h2>

<div className="container mt-5">
               <div className="row">
               
                <div className="col-sm-4 project" style={{color: "white"}}>                 
                <img width="100%" src="https://i.ibb.co/Zg8Qrrf/luxury-4.png" alt="luxury-room"/>
           
           <div className="btn-group mt-2 d-flex"><a {...luxuryProps} rel="noreferrer"
        className="btn btn-success">Live Site</a>

        <a {...luxuryGithubClient} rel="noreferrer"  
       className="btn btn-success">GitHub-Client</a>

        <a {...luxuryGithubServerSide}  rel="noreferrer"
       className="btn btn-success">GitHub-Server</a>
       </div>        
                </div>

                <div className="col-sm-4 project" style={{color: "white"}}>                 
                <img width="100%" src="https://i.ibb.co/wCXxhN8/Screenshot-5.png" alt="bicycle"/>
           
           <div className="btn-group mt-2 d-flex"><a {...bicycleProps} rel="noreferrer"
        className="btn btn-success">Live Site</a>

        <a {...bicycleGithubClient} rel="noreferrer"  
       className="btn btn-success">GitHub-Client</a>

        <a {...bicycleGithubServerSide}  rel="noreferrer"
       className="btn btn-success">GitHub-Server</a>
       </div>      
                </div>

                <div className="col-sm-4 project" style={{color: "white"}}>
                <img width="100%" src="https://i.ibb.co/V9gMbdH/Screenshot-4.png" alt="summer-camp"/>
         
                <div className="btn-group mt-2 d-flex">
                <a {...summerCampLiveSite} rel="noreferrer"
            className="btn btn-sm btn-success">Live Site</a>
             <a  {...summerCampGithubClientSite} rel="noreferrer"
            className="btn btn-success">GitHub-Client</a>
            <a {...summerCampGithubServerSite} rel="noreferrer"
            className="btn btn-success">GitHub-Server</a></div>
                </div>

                <div className="col-sm-4 mt-4 project" style={{color: "white"}}>
                <img width="100%" src="https://i.ibb.co/Bq5HfFm/Screenshot-5.png" alt="mac-book-pro"/>
           
                <div className="btn-group mt-2 ">
                <a {...macBookProLiveSite} rel="noreferrer"
              className="btn  btn-success">Live Site</a>
             <a  {...macBookProGithub} rel="noreferrer"
            className="btn btn-success">GitHub</a>
            </div>
                </div>

                <div className="col-sm-4 mt-4 project" style={{color: "white"}}>
               
           <img width="100%" src="https://i.ibb.co/Yf2NtW2/Screenshot-10.png" alt="study"/>
           
                <div className="btn-group mt-2">
                <a  {...studyLiveSite} rel="noreferrer"  className="btn  btn-success">Live Site</a>
             <a {...studyGithub} rel="noreferrer" 
            className="btn  btn-success">GitHub</a>
           </div>
                </div>

                <div className="col-sm-4 mt-4 project" style={{color: "white"}}>
                <img width="100%" src="https://i.ibb.co/3hNLqzj/health-11.png" alt="health"/>
                  
                <div className="btn-group mt-2">
                <a {...healthLiveSite} rel="noreferrer"   className="btn  btn-success">Live Site</a>
             <a {...healthGithub} rel="noreferrer" 
            className="btn  btn-success">GitHub</a>
           </div>
                </div>

                <div className="col-sm-4 mt-4 project" style={{color: "white"}}>
                <img width="100%" src="https://i.ibb.co/zN9jjNx/Screenshot-6.png" alt="Brand-store"/>
                  
                <div className="btn-group mt-2 ">
                <a {...brandShopLiveLink} rel="noreferrer"  className="btn btn-success">Live Site</a>
             <a {...brandShopGithub} rel="noreferrer" 
            className="btn btn-success">GitHub</a>
            </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Projects;