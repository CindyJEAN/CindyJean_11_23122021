import React from "react";

export default class Error extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (
      <div>404</div>
    );
  }
}