import React from "react";
import './CategoryCard.css';
import catpic1 from "../../images/catpic.png"
import darklayer from "../../images/catdark.png";


// give the src url of the image and the category name as a parameter
const CategoryCard = () => {
    return (
        <div className="cat-card">
            <img src={catpic1} className="img1"/>
            <div className="cat-overlay">
                <img src={darklayer} className="img2"/>
                <div className="cat-name">Celebrities</div>
            </div>
        </div>
    )
}

export default CategoryCard;