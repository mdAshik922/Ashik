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
               <div className="col-sm-4" style={{color: "white"}}>

               <img width="55px" style={{backgroundColor: "white"}} src={code} alt="code"/>
                    <h2>Web Design</h2>
                    <p style={{color: "white"}}>
                    There are many variations of passages 
                    of but the majority have suffered alteration
                     in some form.
                    </p>
                </div>
               
                <div className="col-sm-4" style={{color: "white"}}>                 
              <img width="55px" src={responsive} alt="responsive"/>

                    <h2>Responsive Design</h2>
                    <p>
                    I can design responsive webpages.
                    It will be SEO optimized and hand-coded.
                    </p>
                </div>

                <div className="col-sm-4" style={{color: "white"}}>
                <img width="55px" style={{backgroundColor: "white"}} src={debug} alt="debug"/>
                  
                    <h2>Bugs fixing</h2>
                    <p>
                    I am expert in fixing bugs.
                     if your website have also problem 
                     such like that you may knock me.​
                    </p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Service;