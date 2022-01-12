import React from "react";

export default class About extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (
      <div>A Propos</div>
    );
  }
}