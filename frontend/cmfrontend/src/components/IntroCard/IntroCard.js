import React from "react";
import cardimg from "../../images/shangchi.png";
import './IntroCard.css';

const IntroCard = () => {
    return (
        <div className="intro-card">
            <img src={cardimg} />
            <p className="celebrity-name">Shang Chi</p>
            <p className="celebrity-work">
                Actress - Marvel, Ten Rings
            </p>
        </div>
    )
}

export default IntroCard;