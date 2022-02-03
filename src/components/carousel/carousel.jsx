import React, { Component, Fragment } from "react";
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
   * takes the move (previous or next) in the carousel pictures
   * and updates the state with the new step and picture
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
   * takes the move (previous or next) in the carousel pictures
   * and returns the new step
   * @param {("previous" | "next") } move
   * @returns {Number}  new step in carousel
   */
  newStep(move) {
    const step = move === "next" ? this.state.step + 1 : this.state.step - 1;
    if (step < 0) return this.stepsNumber - 1;
    if (step >= this.stepsNumber) return 0;
    return step;
  }

  render() {
    return (
      <div className="carouselComponent">
        <img src={this.state.actualPicture} className="carousel" />
        {this.stepsNumber !== 1 && (
          <Fragment>
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
          </Fragment>
        )}
        <p>
          {this.state.step + 1}/{this.stepsNumber}
        </p>
      </div>
    );
  }
}
