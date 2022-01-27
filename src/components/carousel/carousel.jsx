import React, { Component } from "react";
import arrow from "../../assets/icon_arrow.svg";

export default class Carousel extends Component {
  pictures;

  /**
   * @param {Object} props
   * @param {Array} props.pictures
   */
  constructor(props) {
    super(props);
    this.pictures = props.pictures;
    this.stepsNumber = this.pictures.length;
    this.state = {
      actualPicture: "",
      step: 0,
    };
  }

  componentDidMount() {
    this.setState({
      actualPicture: this.pictures[this.state.step],
      step: 0,
    });
  }

  handleChangePicture(move) {
    let actualStep = this.state.step;
    if (move === "next") {
      if (actualStep === this.stepsNumber - 1) {
        actualStep = 0;
      } else {
        actualStep = actualStep + 1;
      }
    } else if (actualStep === 0) {
      actualStep = this.stepsNumber - 1;
    } else {
      actualStep = actualStep - 1;
    }
    this.setState({
      actualPicture: this.pictures[actualStep],
      step: actualStep,
    });
  }

  render() {
    return (
      <section className="carouselComponent">
        <img src={this.state.actualPicture} className="carousel" />
        <button
          onClick={() => this.handleChangePicture("previous")}
          className="previous"
        >
          <img src={arrow} alt="" />
        </button>
        <button
          onClick={() => this.handleChangePicture("next")}
          className="next"
        >
          <img src={arrow} alt="" />
        </button>
        <h2>
          {this.state.step + 1}/{this.stepsNumber}
        </h2>
      </section>
    );
  }
}
