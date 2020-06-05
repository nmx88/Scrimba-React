import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      telNumber: "",
      textArea: "",
      isFriendly: true,
      gender: "",
      favColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <>
      <h1>React Forms</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.telNumber}
          name="telNumber"
          placeholder="Tel:"
          onChange={this.handleChange}
        />
        <br />
        <h2>
          {this.state.firstName} {this.state.lastName}
          <br /> {this.state.telNumber}
        </h2>
        <textarea
          name="textArea"
          defaultValue={"Enter text here"}
          onChange={this.handleChange}
        />

        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="neutral"
            checked={this.state.gender === "neutral"}
            onChange={this.handleChange}
          />{" "}
          Neutral
        </label>
        <h2> You are a {this.state.gender} </h2>
        <br />
        <label>Favorite Color: </label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
      </>
    );
  }
}

export default App;

// React Docs about Forms:
// https://reactjs.org/docs/forms.html

/**
 * Other useful form elements:
 *
 *  <textarea /> element
 *  <input type="checkbox" />
 *  <input type="radio" />
 *  <select> and <option> elements
 */

// Formik react library for forms
