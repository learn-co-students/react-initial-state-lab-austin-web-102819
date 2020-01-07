// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    increment = () => {
        const newCount = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newCount
        })
    }
    render() {
        return `I am on slide ${this.state.currentSlideIndex}`
    }
} 
export default ImageSlider;