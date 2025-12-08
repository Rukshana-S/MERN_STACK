import React from "react";
import {Promise} from "./promise-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
export default function PromiseComponent() {
    return (
        <Promise>
           <div className="container">
            <h1 className="title">OUR PROMISE</h1>
            <p className="para">As part of our high quality service, we'd like to offer something extra too.</p>
            <div className="box1">
                <div className="box1-1">
                    <div className="icon">
                    <FontAwesomeIcon icon={faLaptopCode} style={{ color: "rgb(68, 178, 179)", fontSize: "40px"}}/>
                    <h3 className="title1">Top Code Quality</h3>
                    </div>
                    <p className="para1">We are committed to providing high-quality education that meets the needs of our students and prepares them for success in their careers.</p>
                </div>
                <div className="box1-2">
                    <div className="icon">
                    <FontAwesomeIcon icon={faMobile} style={{ color: "rgb(239, 175, 75)", fontSize: "40px"}}/>
                    <h3 className="title2">Responsive</h3>
                    </div>
                    <p className="para2">We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.</p>
                </div>
                <div className="box1-3">
                    <div className="icon">
                    <FontAwesomeIcon icon={faPeopleGroup} style={{ color:  "rgb(0, 189, 235)" , fontSize: "40px"}} />
                    <h3 className="title3">Rockstar Team</h3>
                    </div>
                    <p className="para3">Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.</p>
                </div>
                    <div className="box1-4">
                    <div className="icon">
                    <FontAwesomeIcon icon={faDiamondTurnRight} style={{ color: "rgb(134, 74, 249)", fontSize: "40px"}}/>
                    <h3 className="title4">Fast Turn-arounds</h3>
                    </div>
                    <p className="para4">The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences.</p>
                </div>
            </div>
           
            <div className="box2">
                <div className="box2-2">
                    <div className="icon">
                    <FontAwesomeIcon icon={faLifeRing} style={{ color: "rgb(252, 41, 71)", fontSize: "40px"}}/>
                    <h3 className="title5">Life-time support</h3>
                    </div>
                    <p className="para5">Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.</p>
                </div>
                <div className="box2-3">
                    <div className="icon">  
                    <FontAwesomeIcon icon={faShield} style={{ color: "rgb(50, 199, 102)", fontSize: "40px"}}/>
                    <h3 className="title6">Secured Agreement</h3>
                    </div>
                    <p className="para6">The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).</p>
                </div>
            </div>
        </div>
    </Promise>
    )
}