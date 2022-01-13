import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <main className="homePage">
        <div className="banner">
          <h1>Chez vous, <span className="linebreak">partout et ailleurs</span></h1>
        </div>

        <div className="gallery">
          {/*
            //TODO insérer component article
            */}
        </div>
      </main>
    );
  }
}
