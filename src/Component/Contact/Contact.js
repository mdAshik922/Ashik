import React from 'react';


import './contact.css';
const Contact = () => {
    return (
        <div id="contact" style={{marginTop: "5%"}} >
            <h2 style={{ color: "white", textAlign: "center", marginBottom: "4%", fontSize: "4rem", fontWeight: "bolder"}}>Contact now</h2>
       
       <div id="contact-form" >
       <form action="https://formsubmit.co/md.ashik0005723@gmail.com" method="POST">
     <input style={{ width: "65%", marginLeft: "10%", marginTop: "5%" , paddingLeft: "1%" }} placeholder="Enter your name" type="text" name="name" required />
     <br/>
     <br/>
     <input style={{ width: "65%", marginLeft: "10%", paddingLeft: "1%" }} type="email" name="email" placeholder="Email Address" required />
     <br/>
     <br/>
     <textarea style={{ width: "75%", marginLeft: "10%", paddingLeft: "1%" }} name="message" id="" cols="30" rows="10" placeholder="Message"></textarea >
     <br/>
     <input type="hidden" name="_captcha" value="false" />
     <button style={{ color: "blue", width: "35%", marginTop: "10px", marginLeft: "20%", marginBottom: "5%" , backgroundColor: "red", fontSize: "2rem", fontWeight: "bold", borderRadius: '10px'}} type="submit">Send<i className="far fa-paper-plane"></i></button>
</form>

       </div>
     
      
     
        </div>
    );
};

export default Contact;