import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SocialLink = () => {
    return (
        <div>
             <div style={{textAlign: "end", marginRight: "5%"}}>
      <a  href='https://github.com/mdAshik922' target="_blank" >
          <i  style={{ color: "red",}} className="fab fa-github"></i>
          </a>
          
       <a href="https://www.linkedin.com/in/md-mahmudul-hassan-ashik/" target="_blank">
           <i style={{ color: "red",  margin: "15px"}} className="fab fa-linkedin"></i>
           </a>

       <a href="https://www.facebook.com/profile.php?id=100042195889411" target="_blank">
           <i style={{ color: "red"}} className="fab fa-facebook"></i></a>
           </div>
        </div>
    );
};

export default SocialLink;