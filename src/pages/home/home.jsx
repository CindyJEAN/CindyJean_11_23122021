import Card from "../../components/card/card";
import React from "react";
import { getAllLocations } from "../../data/locations";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.list = getAllLocations();
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
          {this.list.map((location) => (
            <Card id={location.id} title={location.title} image={location.cover} key={location.id} />
          ))}
        </div>
      </main>
    );
  }
}