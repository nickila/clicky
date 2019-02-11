import React from "react";
import images from "../images.json";
import ImageCard from "./ImageCard"

class GameBoard extends React.Component {
    state = {
        images
    };

    // shuffleArray = array => {
    //     let i = array.length - 1;
    //     for (; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = array[i];
    //       array[i] = array[j];
    //       array[j] = temp;
    //     }
    //     return array;
    //   }

    // randomImage = id => {

    //     this.setState({ images });
    // };

    chooseImg = id => {
        
        this.setState({ images });
    };

    render() {
        return (
            <div className="row">
                {this.state.images.map(image => (
                    <div className="col-md-4">
                        <ImageCard
                            chooseImg={this.chooseImg}
                            id={image.id}
                            image={image.image}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default GameBoard;
