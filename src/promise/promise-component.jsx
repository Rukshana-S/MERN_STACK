import React from "react";
import { PromiseStyle } from "./promise-style";
const PromiseComponent = () => {
  return (
    <PromiseStyle>
      <div className="promise-container">
        <div className="promise-title">
          <h1>Our Promise</h1>
        </div>
        <div className="promise-content">
          <div className="promise-item">
            <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="like" className="icon" />
            <h2>Excellence in Training</h2>
            <p>We are committed to providing you with the best training in the industry, ensuring that you receive the most up-to-date and relevant knowledge.</p>
          </div>
          <div className="promise-item">
            <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="like" className="icon" />
            <h2>Expert Trainers</h2>
            <p>Our trainers are industry experts who are passionate about sharing their knowledge and helping you succeed.</p>
          </div>
          <div className="promise-item">
            <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="like" className="icon" />
            <h2>Flexible Learning</h2>
            <p>We offer a variety of learning options to suit your needs, whether you prefer self-paced courses or have a preferred schedule.</p>
          </div>
          <div className="promise-item">
            <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="like" className="icon" />
            <h2>Personalized Support</h2>
            <p>We provide personalized support to address your unique needs and goals.</p>
          </div>
        </div>
      </div>
    </PromiseStyle>
  );
};

export default PromiseComponent;