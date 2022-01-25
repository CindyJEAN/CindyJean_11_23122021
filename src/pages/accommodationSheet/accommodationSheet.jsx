import React, { Component } from "react";
import { getAccommodation } from "../../data/accommodations";

export default class AccommodationSheet extends Component {
  /**
   * @param {Object} props
  //  * @param {Object} props.match
  //  * @param {Object} props.match.params
  //  * @param {String} props.match.params.id
   */
  constructor(props) {
    super(props);
    // this.id = "c67ab8a7";
    // console.log(this.props.match.params);
    this.id = this.props.match.params.id;
    this.accommodationData = getAccommodation(this.id);
    // this.state = {
    //   accommodationData: {},
    // };
  }

  // componentDidMount() {
  //   this.setState({ accommodationData: getAccommodation(this.id) });
  // }

  render() {
    // const { id } = this.props.match.params;
    // const { accommodationData } = this.state;
    const {
      title,
      cover,
      pictures,
      description,
      host,
      rating,
      location,
      equipments,
      tags,
    } = this.accommodationData;
    return (
      <main className="accommodationSheetPage">
        {/* <div>Housing: {this.id}</div> */}
        <h1>{title}</h1>
        <address>{location}</address>
        {tags.map((tag, index) => (
          <div key={index}>{tag}</div>
        ))}
      </main>
    );
  }
}

AccommodationSheet.propTypes = {
  match: {
    params: {
      id: String,
    },
  },
};
