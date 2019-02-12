import React from "react";

function ScoreBoard(props) {


    return (
        <div className="col-md-3 countDiv">
            <h3 className="count">Score: {props.count}</h3>
        </div>
    )


}



export default ScoreBoard;


