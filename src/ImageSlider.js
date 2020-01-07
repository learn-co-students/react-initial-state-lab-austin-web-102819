import { Component } from "react";
import React from "react";

// your ImageSlider code here!
class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return <h1>I am on slide {this.state.currentSlideIndex}</h1>;
  }
}

export default ImageSlider;
