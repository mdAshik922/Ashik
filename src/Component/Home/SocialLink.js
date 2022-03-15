import React from 'react';

const SocialLink = () => {
    
    const githubProps = {
        href:"https://github.com/mdAshik922",
         target:"_blank"
      };    
      const linkedinProps = {
        href:"https://www.linkedin.com/in/md-mahmudul-hassan-ashik/",
         target:"_blank"
      };

      const facebookProps = {
        href:"https://www.facebook.com/Md.Ashik00000",
         target:"_blank"
      };

    return (
        <div>
             <div style={{textAlign: "end", marginRight: "5%"}}>
      <a {...githubProps} rel="github" >
          <i  style={{ color: "red", fontSize: "2rem"}} className="fab fa-github"></i>
          </a>
          
       <a {...linkedinProps} rel="linkedin">
           <i style={{ color: "red",  margin: "15px", fontSize: "2rem"}} className="fab fa-linkedin"></i>
           </a>

       <a {...facebookProps} rel="facebook">
           <i style={{ color: "red", fontSize: "2rem"}} className="fab fa-facebook"></i></a>
           </div>
        </div>
    );
};

export default SocialLink;