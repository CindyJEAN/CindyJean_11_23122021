import React, { Component } from "react";
import Card from "../../components/card/card";
import { getAllAccommodations } from "../../data/accommodations";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.accommodations = getAllAccommodations();
  }

  render() {
    return (
      <main className="homePage">
        <div className="banner">
          <h1>
            Chez vous, <span className="linebreak">partout et ailleurs</span>
          </h1>
        </div>

        <div className="gallery">
          {this.accommodations.map((accommodation) => {
            const { id, title, cover } = accommodation;
            return (
              <Card
                key={`accomodation-${id}`}
                title={title}
                image={cover}
                id={id}
                numberOfAccommodations={this.accommodations.length}
              />
            );
          })}
        </div>
      </main>
    );
  }
}
