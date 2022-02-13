import React from "react";
import arrow from "../../assets/icon_arrow.svg";

export default class Carousel extends React.Component {
  pictures;
  title;

  /**
   * @param {Object} props
   * @param {Array} props.pictures
   * @param {String} props.title
   */
  constructor(props) {
    super(props);
    this.title = props.title;
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
        <img src={this.state.actualPicture} alt={`${this.title}-${this.state.step+1}`} className="carousel" />
        {this.stepsNumber !== 1 && (
          <React.Fragment>
            <button
              onClick={() => this.handleChangePicture("previous")}
              className="previous"
            >
              <img src={arrow} alt="flèche précédent" />
            </button>
            <button
              onClick={() => this.handleChangePicture("next")}
              className="next"
            >
              <img src={arrow} alt="flèche suivant" />
            </button>
          </React.Fragment>
        )}
        <p>
          {this.state.step + 1}/{this.stepsNumber}
        </p>
      </div>
    );
  }
}
