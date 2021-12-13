import React from 'react';
import { Link } from 'react-router-dom';

const SocialLink = () => {
    return (
        <div>
             <div style={{textAlign: "end", marginRight: "5%"}}>
      <Link to="https://github.com/mdAshik922" target="_blank">
          <i  style={{ color: "white",}} className="fab fa-github"></i>
          </Link>
          
       <Link to="https://www.linkedin.com/in/md-mahmudul-hassan-ashik/" target="_blank">
           <i style={{ color: "white",  margin: "15px"}} className="fab fa-linkedin"></i>
           </Link>

       <Link to="https://www.facebook.com/profile.php?id=100042195889411" target="_blank">
           <i style={{ color: "white"}} className="fab fa-facebook"></i></Link>
           </div>
        </div>
    );
};

export default SocialLink;