import React, { Component } from "react";
import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
import { getAccommodation } from "../../data/accommodations";
import starGrey from "../../assets/icon_star_grey.svg";
import starPrimary from "../../assets/icon_star_primary.svg";
export default class AccommodationSheet extends Component {
  //TODO comment props
  title;
  cover;
  pictures;
  description;
  host;
  rating;
  location;
  equipments;
  tags;
  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;

    this.accommodationData = getAccommodation(this.id);

    for (const [key, value] of Object.entries(this.accommodationData)) {
      this[key] = value;
    }

    this.ratings = [];
    for (let i = 5, rating = Number(this.rating); i > 0; i--, rating--) {
      if (rating > 0) {
        this.ratings.push("primary");
      } else {
        this.ratings.push("grey");
      }
    }
  }

  // componentDidMount() {
  //   this.setState({ accommodationData: getAccommodation(this.id) });
  // }

  render() {
    // const { accommodationData } = this.state;
    return (
      <main className="accommodationSheetPage">
        <Carousel pictures={this.pictures} />
        <h1>{this.title}</h1>
        <address>{this.location}</address>
        <div className="tagsContainer">
          {this.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="rating">
          {this.ratings.map((rating, index) => (
            <img
              key={index}
              src={rating === "primary" ? starPrimary : starGrey}
            />
          ))}
        </div>
        <div className="host">
          <p>{this.host.name}</p>
          <img src={this.host.picture} />
        </div>
      </main>
      //TODO dropdown component
    );
  }
}
