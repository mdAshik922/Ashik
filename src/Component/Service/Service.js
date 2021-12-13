import React from 'react';
import './Service.css';
import responsive from './img/responsive.png';
import code from './img/coding.png';
import debug from './img/debug.png';

const Service = () => {
    return (
        <div>
            <div className="container mt-5">
               <div class="row">
               <div class="col-sm-4" style={{color: "white"}}>
               <i width="55px" className="fas fa-code text-custom"></i>
                    <h2>Web Design</h2>
                    <p style={{color: "white"}}>
                    There are many variations of passages 
                    of but the majority have suffered alteration
                     in some form.
                    </p>
                </div>
               
                <div class="col-sm-4" style={{color: "white"}}>
                
                    <h2>Graphic Design</h2>
                    <p>
                    I can design logo, banner, thumbnail
                     for your project. I am very experienced
                      and expert in this fiend.
                    </p>
                </div>
                <div class="col-sm-4" style={{color: "white"}}>
              <img width="55px" src={responsive} alt="responsive"/>
                    <h2>Responsive Design</h2>
                    <p>
                    I can design responsive webpages.
                     It will be W3C validated, fresh,
                      SEO optimized and hand coded.
                    </p>
                </div>
                <div class="col-sm-4" style={{color: "white"}}>
                <i class="fas fa-tools text-custom"></i>
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