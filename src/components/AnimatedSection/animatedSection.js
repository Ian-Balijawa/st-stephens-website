import React, { Component } from "react";
import { animatePathDrawing } from "./canvasUtils";

// can't use glamourous as need the width and height of the element
const backgroundStyle = {
  background: `linear-gradient(180deg, #fff, #F0FEFF)`,
  height: "100%",
  position: "relative"
};

const canvasStyle = {
  position: "absolute",
  pointerEvents: "none",
  height: "100%",
  width: "100%"
};

class AnimatedBackground extends Component {
  state = {
    height: null,
    width: null
  };

  componentDidMount() {
    const view = this.refs.view;
    const ratio = window.devicePixelRatio || 1;
    const width = view.clientWidth * ratio || 0;
    const height = view.clientHeight * ratio || 0;
    this.setState({ width, height });
    this.updateCanvas(width, height);
  }

  updateCanvas(width, height) {
    const ctx = this.refs.canvas.getContext("2d");
    const lines = Math.floor(Math.random() * (4 - 1) + 1);
    animatePathDrawing(ctx, lines, 8000, width, height);
  }

  render() {
    const canvas = this.state ? (
      <canvas
        ref="canvas"
        width={this.state.width}
        height={this.state.height}
        style={canvasStyle}
      />
    ) : null;
    return (
      <div ref="view" style={backgroundStyle}>
        {canvas}
        {this.props.children}
      </div>
    );
  }
}

export default AnimatedBackground;
