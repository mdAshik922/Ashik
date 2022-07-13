import React from 'react';

const Blogs = () => {

    const medium = {
        href:"https://medium.com/@md.ashik0005723/explained-for-beginners-about-javascript-js-c5c80f7c3aa6",
         target:"_blank"
      };

    return (
        <div id="blog">
            <h2 style={{color: "white", textAlign: "center", marginTop: "8%", fontSize: "4rem", fontWeight: "bolder"}}>
            <i className="far fa-edit"></i>My Blog</h2>

<div style={{marginLeft: "35%", marginTop: "3%"}}>
<a style={{textDecoration: "none"}} {...medium} rel="noreferrer">
<img width="50%" src="https://i.ibb.co/qLSM1Fs/download.png" alt="blog"/>
<h3 style={{color: "white"}}>Javascript for Beginner</h3>
<p style={{color: "#77E4D4"}}><strong>...Learn More</strong></p>
</a>
</div>
        </div>
    );
};

export default Blogs;