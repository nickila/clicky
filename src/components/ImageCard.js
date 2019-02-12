import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
    return (
        <div className="imageStuff">
            <img alt="ultraman" key={props.id} src={props.image} onClick={() => props.chooseImg(props.id)} />
        </div>
    )
}

export default ImageCard;