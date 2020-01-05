import React from 'react';
import taco from "./sprites/taco";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      canvas: null,
      interval: null,
      ctx: null,
      tacoSprite: null,
      gravitySpeed: 2,
    };
  }

  componentDidMount() {
    const canvas = this.refs.myCanvas;
    const ctx = canvas.getContext("2d");
    
    // Load image /public/taco.svg
    const tacoImage = new Image();
    tacoImage.src = "taco.svg";

    let setTaco = () => {
      // Create tacoSprite object
      let tacoSprite = taco({
        canvas,
        context: ctx,
        taco: tacoImage,
        gravitySpeed: this.state.gravitySpeed,
      });
      this.setState({ canvas, ctx, tacoSprite: tacoSprite }, ()=> {
        // Start loop game when the state is setted
        this.update();
      });
    };

    // Wait the load of taco image to create the tacoSprite object
    tacoImage.addEventListener("load", () => {
        setTaco();
    });
  }

  /* 
  * Update every 10 milliseconds
  */
  update() {
    if (this.state.canvas && this.state.ctx && this.state.tacoSprite) this.state.tacoSprite.render();
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.update();
      });
    }, 10);
  }

  render() {
    return (
      <div className="App">
        <canvas ref="myCanvas" width={window.innerWidth} height={window.innerHeight} />
      </div>
    );
  }
}

export default App;
