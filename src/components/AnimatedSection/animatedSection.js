import React, { Component } from "react";
import { animatePathDrawing } from "./canvasUtils";
import styles from "./styles";

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
        className={styles.canvasStyle}
      />
    ) : null;
    return (
      <div ref="view" className={styles.backgroundStyle}>
        {canvas}
        <div className={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default AnimatedBackground;
