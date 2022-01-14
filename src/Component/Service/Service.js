import React from 'react';
import './Service.css';
import responsive from './img/responsive.png';
import code from './img/coding.png';
import debug from './img/debug.png';


const Service = () => {
    return (
        <div>
            <div className="container mt-5">
               <div className="row">
               <div className="col-sm-4" style={{color: "", backgroundColor:"#D6E5FA"}}>

               <img className="service-img" width="55px" src={code} alt="code"/>
                <article>
                <h2 className="service-head-line">Web Development</h2>
                    <p>
                    I create a single page and multi-page website
                     and add different features here.
                    </p>
                </article>
                           </div>
               
                <div className="col-sm-4" style={{color: "blue", backgroundColor: "#FAEDF0"}}>                 
              <img className="service-img" width="55px" src={responsive} alt="responsive"/>
                 <article>
                 <h2 className="service-head-line">Responsive Design</h2>
                    <p>
                    I can design responsive webpages.
                    PSD to HTML and Figma.
                    It will be SEO optimized and hand-coded.
                    <strong>W3c Validation.</strong>
                    </p>
                 </article>
                       </div>

                <div className="col-sm-4" style={{color: "#FD5E53", backgroundColor: "#FFD3B6"}}>
                <img className="service-img" width="55px" src={debug} alt="debug"/>
                   <article>
                   <h2 className="service-head-line">Bugs fixing</h2>
                    <p>
                    I am expert in fixing bugs.
                     if your website have also problem 
                     such like that you may knock me.
                    </p>
                   </article>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Service;