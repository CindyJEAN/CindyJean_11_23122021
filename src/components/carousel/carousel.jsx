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

  /**
   * @param {("previous" | "next") } move
   * @returns {void}  update state
   */
  handleChangePicture(move) {
    const step = this.newStep(move);
    this.setState({
      actualPicture: this.pictures[step],
      step: step,
    });
  }

  /**
   * TODO  compléter
   * @param {("previous" | "next") } move
   * @returns {Number}  new slider position
   */
  newStep(move) {
    const step = move === "next" ? this.state.step + 1 : this.state.step - 1;
    if (step < 0) return this.stepsNumber - 1;
    if (step >= this.stepsNumber) return 0;
    return step;
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
