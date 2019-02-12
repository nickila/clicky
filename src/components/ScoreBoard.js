import React from "react";

function ScoreBoard(props) {


    return (
        <div>
            <div className="row">
                <h3>Score: {props.count} </h3>
            </div>
            <div className="row">
                <h3> High Score: {props.highScore}</h3>
            </div>

        </div>
    )


}



export default ScoreBoard;


