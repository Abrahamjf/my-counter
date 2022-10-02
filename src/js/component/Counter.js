import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";


export const Counter = (props) => {
    return (
        <div className ="big-box">
            <div>
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className = "six">{props.digitSix}</div>
            <div className="five">{props.digitFive}</div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
};

Counter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let count = 0;
setInterval(function(){
    const six = Math.floor((count/100000)%10);
    const five = Math.floor((count/10000)%10);
    const four = Math.floor((count/1000)%10);
    const three = Math.floor((count/100)%10);
    const two = Math.floor((count/10)%10);
    const one = Math.floor((count/1)%10);
    count++;
    ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app"));
 },1000);