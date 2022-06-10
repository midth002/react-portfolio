import React from 'react';
import me from "../../assets/images/LinkedInPicture2.jpg";
import "./about.scss";

const About = () => {
  return (
    <div className='about-me' id='about'>
         
        <div className="container">
       
          <div className="row">
            <div className="col-lg-5 about-content">
            <div className="about-title">
            <h2>About Me</h2>
        </div>
          <p id="about-des">
              I am a aspiring software developer. I have experience as a IT support specialist so I have a jack of all trades. I am passionate about being a problem solver and what technology can do for our future. I have always enjoyed coding in my experience as I love the challenging aspects it can bring.  
          </p>
        </div>
          <div className="col image-col">
            <img  src={me} alt="coder icon" id="coder" />
            {/* <div className="square-outline">
            </div>  */}
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default About;