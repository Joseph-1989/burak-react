// @ts-nocheck
import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Toyota",
      color: "Red",
      model: "Corolla",
      year: 2020,
    };
  }

  changeDetail = () => {
    this.setState({
      brand: "Honda",
      color: "Blue",
      model: "Civic",
      year: 2019,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    // runs after first render
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // runs before component unmount
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h1> My {this.state.brand} </h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model} from
          {this.state.year}
        </p>
        <button type="button" onClick={this.changeDetail}>
          Change Detail
        </button>
      </div>
    );
  }
}

export default Test;
