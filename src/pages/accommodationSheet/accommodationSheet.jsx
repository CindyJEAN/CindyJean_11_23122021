import React, { Component } from "react";
import { getAccommodation } from "../../data/accommodations";

export default class AccommodationSheet extends Component {
  constructor(props) {
    super(props);
    this.id = "c67ab8a7";
    this.accommodationData = getAccommodation(this.id);
    // this.state = {
    //   accommodationData: {},
    // };
  }

  // componentDidMount() {
  //   this.setState({ accommodationData: getAccommodation(this.id) });
  // }

  render() {
    // const { id } = this.props.matchparams;
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
        {tags.map((tag, index) => (<div key={index}>{tag}</div>))}
      </main>
    );
  }
}
