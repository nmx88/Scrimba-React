import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn : true
    }
  }

  render() {
    let answer = ""
    if (this.state.isLoggedIn === true) {
      answer = "in"
    } else {
      answer = "out"
    }
    return (
      <div>
        <h1> You are currently logged {answer}</h1>
      </div>
    )
  }
}



export default App;
