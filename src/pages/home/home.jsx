import Card from "../../components/card/card";
import React from "react";
import { getAllAccommodations } from "../../data/accommodations";

export default class Home extends React.Component {
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
              />
            );
          })}
        </div>
      </main>
    );
  }
}
