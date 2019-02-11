import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
    return (
        <div>
            <img alt="letter" src={props.image} onClick={() => props.chooseImg(props.id)} />
        </div>
    )
}

export default ImageCard;