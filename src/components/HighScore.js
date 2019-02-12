import React from "react";

function HighScore(props) {

return (
<div className="col-md-3 scoreDiv">
    <h3 className="highScore">High Score: {props.highScore}</h3>
</div>
)
}


export default HighScore;