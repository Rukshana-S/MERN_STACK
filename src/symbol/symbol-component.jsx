import React from "react";
import { SymbolStyle } from "./symbol-style";
export default function Symbol() {
    return(
        <SymbolStyle>
            <div className="main-container">
       <div className="container1">
       <h1 className="container1-header1">Aptitude Guru Hem</h1>
       <h1 className="container1-header2">At AGH, we shape futures and build skills that matter.</h1>
       <i className="container1-italic">strive for your excellence.</i>
       <div className="sub-container1">
        <p>Where Success Meets Opportunity! Are you ready to embark on a transformative journey towards success? At Aptitude Guru Hem, we are committed to providing you with the essential skills and knowledge to excel in your professional endeavors. Our expert training in aptitude and coding equips you to conquer every challenge, from company interview assessments to prestigious coding platforms like LeetCode, GeeksForGeeks, HackerRank , and more.</p>
        <div className="button-group-container1">
        <button className="button1">Start your learning</button>
        <button className="button2">Join Live Demo</button>
        </div>
       </div>
       </div>
       <div className="container2">
       <img src="/image.png" alt="image" />

       </div>
       </div>

            <div className="symbol">
               <h1 class='heading'>A Symbol of Excellence in Placement Training</h1>
               <p className="para1">Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success.</p>
               <div className="vission-mission">
                    <div className="vission">
                        <h1 className="vission-1">Our Vission</h1>
                        <p className="para2">Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="mission">
                        <h1 className="mission-1">Our Mission</h1>
                        <p className="para3">Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth..</p>
                    </div>
               </div>
            </div>
            <div className="pill-box">
        <h1>Learners Today, Leaders Tomorrow</h1>
        <p className="pill-para">
          With our continuous research and development, we provide<br></br> you with an
          excellent Aptitude training.
        </p>
      </div>
      <div className="impact-title">
        <h1>Impact at a <span>Glance</span></h1>
      </div>
      <div className="container-full">

        <div className="upper-container">
          <div className="container-item1">
            <div>
              <h2>Colleges</h2>
              <p>100+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="college" className="icon" />
          </div>

          <div className="container-item2">
            <div>
              <h2>Study Materials</h2>
              <p>1000+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="books" className="icon" />
          </div>

        </div>

        <div className="lower-container">
          <div className="container-item3">
            <div>
              <h2>Students</h2>
              <p>1,00,000+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="students" className="icon" />
          </div>

          <div className="container-item4">
            <div>
              <h2>Professional Trainers</h2>
              <p>150+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="trainers" className="icon" />
          </div>

        </div>

      </div>
                  <div className="getintouch-outer-container">
                <div className="getintouch-inner-container">

                    {/* LEFT TEXT SECTION */}
                    <div className="getintouch-left-container">
                        <h1>GET IN TOUCH</h1>
                        <p>
                            Have questions or feedback? We're here to help.<br />
                            Send us a message and we'll respond soon.
                        </p>
                        <button>Contact Us</button>
                    </div>

                    {/* RIGHT IMAGE + CIRCLES */}
                    <div className="getintouch-right-container">
                        <div className="circle-big"></div>
                        <div className="circle-small"></div>

                        <img
                            src="https://aptitudeguruhem.com/static/media/get-in-touch.8c521c235d4bd711343c.jpg"
                            alt="getintouch"
                            className="getintouch-image"
                        />
                    </div>

                </div>
            </div>
        </SymbolStyle>
    )
}