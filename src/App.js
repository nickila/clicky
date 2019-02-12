import React, { Component } from 'react';
import './App.css';
import ImageCard from "./components/ImageCard";
import images from "./images.json"
// import ScoreBoard from "./components/ScoreBoard"

class App extends Component {

  state = {
    images,
    count: 0,
    highScore: 0,
    arr: [],
    shuffle: []
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  chooseImg = id => {
    if (this.state.arr.includes(id)) {
      if (this.state.count > this.state.highScore) {
        this.setState({ highScore: this.state.count })
      }
      this.setState({ count: 0, arr: [] })
      console.log(this.state.arr);
    } else {
      this.setState({ count: this.state.count + 1 });
      this.state.arr.push(id);
      console.log(this.state.arr);
    }
    this.shuffle(this.state.images);
  };

  render() {
    return (
      <div className="container">
        {/* <ScoreBoard 
        count={this.count}
        highScore={this.highScore}
      /> */}
        <div className="row">
          <div className="col-md-3 countDiv">
            <h3 className="count">Score: {this.state.count}</h3>
          </div>
          <div className="col-md-6">
            <h1 className="title">CLICKY GAME</h1>
          </div>
          <div className="col-md-3 scoreDiv">
            <h3 className="highScore">High Score: {this.state.highScore}</h3>
          </div>
        </div>
        <div className="row">
          {this.state.images.map(image => (
            <div className="col-md-3 imgDiv">
              <ImageCard
                chooseImg={this.chooseImg}
                id={image.id}
                key={image.id}
                image={image.image}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

}
export default App;