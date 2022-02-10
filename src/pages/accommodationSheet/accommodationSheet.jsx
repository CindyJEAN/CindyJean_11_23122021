import React, { Component } from "react";
import Carousel from "../../components/carousel/carousel";
import Dropdown from "../../components/dropdown/dropdown";
import Tag from "../../components/tag/tag";
import { getAccommodationById } from "../../data/accommodations";
import starGrey from "../../assets/icon_star_grey.svg";
import starPrimary from "../../assets/icon_star_primary.svg";
export default class AccommodationSheet extends Component {
  //#region variables declaration
  /**
   * @type {String}
   */
  title;
  /**
   * @type {String}
   */
  cover;
  /**
   * @type {Array.<String>}
   */
  pictures;
  /**
   * @type {String}
   */
  description;
  /**
   * @type {Object}
   */
  host;
  /**
   * @type {String}
   */
  rating;
  /**
   * @type {String}
   */
  location;
  /**
   * @type {Array.<String>}
   */
  equipments;
  /**
   * @type {Array.<String>}
   */
  tags;
  //#endregion

  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    try {
      this.id = this.props.match.params.id;
      this.accommodationData = getAccommodationById(this.id);
      for (const [key, value] of Object.entries(this.accommodationData)) {
        this[key] = value;
      }

      this.ratings = this.getRatingsAsArray(this.rating);
    } catch (err) {
      this.props.history.replace("/404");
      window.location.reload();
    }
  }

  /**
   * changes the n number of rating in an array to n "primary" and 5-n "grey"
   * @returns {Array} array of "primary" and "grey"
   */
  getRatingsAsArray(rating) {
    const ratings = [];
    for (let i = 5, ratingNumber = Number(rating); i > 0; i--, ratingNumber--) {
      if (ratingNumber > 0) {
        ratings.push("primary");
      } else {
        ratings.push("grey");
      }
    }
    return ratings;
  }

  render() {
    return (
      <main className="accommodationSheetPage">
        <Carousel pictures={this.pictures} title={this.title} />
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
              alt={rating === "primary" ? "étoile pleine" : "étoile vide"}
            />
          ))}
        </div>
        <div className="host">
          <p>{this.host.name}</p>
          <img src={this.host.picture} alt="image hôte" />
        </div>
        <div className="dropdownContainer">
          <Dropdown label="Description" content={[this.description]} />
          <Dropdown label="Equipements" content={[...this.equipments]} />
        </div>
      </main>
    );
  }
}
